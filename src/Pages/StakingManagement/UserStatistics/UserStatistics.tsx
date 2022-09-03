import { useEffect, useState } from "react";
import ActionTable from "../../../components/Base/Table/ActionTable";
import { useAppSelector } from "../../../store/hooks";
import {
  currentRound,
  roundEndedData,
  roundUserAddedData,
  roundUserRemoved,
} from "../../../store/initstakinginfo/selectors";
import { useStyles } from "./UserStatisticsStyles";
import TableContent from "./UserStatisticsTable/TableContent";

export const statisticsHeader = [
  "Round",
  "Round Users",
  "New Users",
  "Removed Users",
];

const UserStatistics = () => {
  const classes = useStyles();
  const endedData = useAppSelector(roundEndedData);
  const addedUserData = useAppSelector(roundUserAddedData);
  const removedUserData = useAppSelector(roundUserRemoved);
  const roundNum = useAppSelector(currentRound);
  const [statisticsArray, setStatisticsArray] = useState<any>();

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

    let resultEnded: any = [];

    for (let i = 0; i < endedData?.length; i++) {
      let item: any[] = [];
      item = item.concat(endedData[i][1]);
      let index = item?.indexOf("0x0000000000000000000000000000000000000000");
      if (index > -1) {
        item?.splice(index--, 1);
      }
      resultEnded.push(item);
    }

    //---------------make table display data as default type-------
    for (let i = 0; i < roundNum; i++) {
      let newUserNum = 0;
      let removeUserNum = 0;
      for (let j = 0; j < addedUserData?.length; j++) {
        if (addedUserData[j][1]?.toString() === i.toString()) {
          newUserNum++;
        }
      }
      for (let k = 0; k < removedUserData?.length; k++) {
        if (removedUserData[k][1]?.toString() === i.toString()) {
          removeUserNum++;
        }
      }
      resultArray.push({
        round: i,
        users: resultEnded[i]?.length,
        newusers: newUserNum,
        removedusers: removeUserNum,
      });
    }
    setStatisticsArray(resultArray);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endedData, addedUserData, removedUserData]);

  return (
    <>
      <div className={classes.title}>UserStatistics</div>
      <div className={classes.container}>
        <ActionTable
          className={classes.tableRoot}
          handlePgNum={handlePgNum}
          handlePgRows={handlePgRows}
          totalCnt={statisticsArray?.length}
          PgNum={currentPage}
          PgRows={perPage}
          tableContent={
            <TableContent
              rows={statisticsArray}
              pageNumber={currentPage}
              perPageNumber={perPage}
              columns={statisticsHeader}
            />
          }
        />
      </div>
    </>
  );
};

export default UserStatistics;
