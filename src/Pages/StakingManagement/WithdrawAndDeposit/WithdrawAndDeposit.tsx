import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import {
  currentRound,
  roundEndedData,
  withdrawData,
  depositData,
} from "../../../store/initstakinginfo/selectors";
import { useStyles } from "./WithdrawAndDepositStyles";
import { ethers } from "ethers";
import ActionTable from "../../../components/Base/Table/ActionTable";
import TableContent from "./TableContent/TableContent";

export const WithdrawAndDepositHeader = [
  "Round",
  "Round Staked",
  "Withdraw",
  "Deposit",
];

const WithdrawAndDeposit = () => {
  const classes = useStyles();
  const endedData = useAppSelector(roundEndedData);
  const roundNum = useAppSelector(currentRound);
  const withdraw = useAppSelector(withdrawData);
  const deposit = useAppSelector(depositData);
  const [WDResultArray, setWDResultArray] = useState<any>();

  //-----------pagination function------------------------
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(5);

  const handlePgNum = (pgNum: number) => {
    setCurrentPage(pgNum);
  };

  const handlePgRows = (rows: number) => {
    setPerPage(rows);
    setCurrentPage(0);
  };

  useEffect(() => {
    let resultArray: any = [];
    //---------------make table display data as default type-------
    for (let i = 0; i < roundNum; i++) {
      let withdrawCount = 0;
      let withdrawAmount = 0;
      let depositCount = 0;
      let depositAmount = 0;
      for (let j = 0; j < withdraw?.length; j++) {
        if (withdraw[j][1]?.toString() === i.toString()) {
          withdrawCount++;
          withdrawAmount += Number(
            ethers.utils.formatUnits(withdraw[j][2], 18)
          );
        }
      }
      for (let k = 0; k < deposit?.length; k++) {
        if (deposit[k][1]?.toString() === i.toString()) {
          depositCount++;
          depositAmount += Number(ethers.utils.formatUnits(deposit[k][2], 18));
        }
      }
      resultArray.push({
        round: i,
        staked: Number(ethers.utils.formatUnits(endedData[i][3], 18)),
        withdrawAmount: withdrawAmount,
        withdrawCount: withdrawCount,
        depositAmount: depositAmount,
        depositCount: depositCount,
      });
    }
    setWDResultArray(resultArray);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endedData, withdraw, deposit]);

  return (
    <>
      <div className={classes.title}>Withdraw & Deposit</div>
      <div className={classes.container}>
        <ActionTable
          className={classes.tableRoot}
          handlePgNum={handlePgNum}
          handlePgRows={handlePgRows}
          totalCnt={WDResultArray?.length}
          PgNum={currentPage}
          PgRows={perPage}
          tableContent={
            <TableContent
              rows={WDResultArray}
              pageNumber={currentPage}
              perPageNumber={perPage}
              columns={WithdrawAndDepositHeader}
            />
          }
        />
      </div>
    </>
  );
};

export default WithdrawAndDeposit;
