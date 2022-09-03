import { useEffect, useState } from "react";
import ActionTable from "../../../components/Base/Table/ActionTable";
import { useAppSelector } from "../../../store/hooks";
import {
  withdrawData,
  depositData,
} from "../../../store/initstakinginfo/selectors";
import { useStyles } from "./DetailStyles";
import TableContent from "./DetailTable/TableContent";

export const DetailHeader = [
  "No",
  "Type",
  "Round",
  "User",
  "Amount",
  "Timestamp & Date",
];

const Detail = () => {
  const classes = useStyles();
  const withdraw = useAppSelector(withdrawData);
  const deposit = useAppSelector(depositData);
  const [detailArray, setDetailArray] = useState<any>();

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
    //----make table type array from origin array data-------
    let withdrawArray: any = [];
    let depositArray: any = [];
    for (let i = 0; i < deposit?.length; i++) {
      let itemDeposit: any[] = [];
      itemDeposit = itemDeposit.concat(deposit[i]);
      itemDeposit.push("Deposit");
      depositArray.push(itemDeposit);
    }
    for (let i = 0; i < withdraw?.length; i++) {
      let itemWithdraw: any[] = [];
      itemWithdraw = itemWithdraw.concat(withdraw[i]);
      itemWithdraw.push("Withdraw");
      withdrawArray.push(itemWithdraw);
    }
    let totalArray: any = depositArray.concat(withdrawArray);
    totalArray.sort((a: any, b: any) => (Number(a[3]) < Number(b[3]) ? -1 : 1));
    setDetailArray(totalArray);
  }, [withdraw, deposit]);

  return (
    <>
      <div className={classes.title}>Detail</div>
      <div className={classes.container}>
        <ActionTable
          className={classes.tableRoot}
          handlePgNum={handlePgNum}
          handlePgRows={handlePgRows}
          totalCnt={detailArray?.length}
          PgNum={currentPage}
          PgRows={perPage}
          tableContent={
            <TableContent
              rows={detailArray}
              pageNumber={currentPage}
              perPageNumber={perPage}
              columns={DetailHeader}
            />
          }
        />
      </div>
    </>
  );
};

export default Detail;
