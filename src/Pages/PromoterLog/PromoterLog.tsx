import { useEffect, useState } from "react";
import ActionTable from "../../components/Base/Table/ActionTable";
import { LargeTitle } from "../../components/Base/Text/Text";
import { useStyles } from "./PromoterLogStyles";
import { getLogs } from "../../store/api/log";
import { useAppDispatch } from "../../store/hooks";
import { showAlert } from "../../store/alert";
import { Search } from "../../components/Base/Search/Search";
import TableContent from "./PromoterLogTable/TableContent";

export const promoterlogHeader = [
  "ID",
  "Version",
  "Account",
  "Source",
  "Device",
  "Activity",
  "Amount",
  "Status",
  "IPAddress",
  "Timestamp",
];

const PromoterLog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [tableData, setTableData] = useState<any>();
  const [totalCnt, setTotalCnt] = useState<any>();

  const handlePgNum = (pgNum: number) => {
    setCurrentPage(pgNum);
  };

  const handlePgRows = (rows: number) => {
    setPerPage(rows);
    setCurrentPage(0);
  };

  const handleSearch = (start: number, end: number, keyword: string) => {
    setStartDate(start);
    setEndDate(end);
    setSearchValue(keyword);
    setCurrentPage(0);
    setPerPage(5);
  };

  const init = async () => {
    const formData = new FormData();
    formData.append("start_date", startDate.toString());
    formData.append("end_date", endDate.toString());
    formData.append("keyword", searchValue);
    formData.append("cur_page", currentPage.toString());
    formData.append("per_page", perPage.toString());

    let tableData = await getLogs(formData);

    if (tableData?.data?.Success === false) {
      dispatch(
        showAlert({
          message: tableData?.data?.Error?.Msg,
          severity: "error",
        })
      );
    } else {
      setTableData(tableData?.data?.Data);
      setTotalCnt(tableData?.data?.TotalCnt);
    }
  };

  useEffect(() => {
    init();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, perPage, startDate, endDate, searchValue]);

  return (
    <>
      <div className={classes.promoterlogRoot}>
        <LargeTitle>Promoter Log</LargeTitle>
        <Search handleSearch={handleSearch} />
        <ActionTable
          className={classes.tableRoot}
          handlePgNum={handlePgNum}
          handlePgRows={handlePgRows}
          totalCnt={totalCnt}
          PgNum={currentPage}
          PgRows={perPage}
          tableContent={
            <TableContent
              rows={tableData}
              pageNumber={currentPage}
              perPageNumber={perPage}
              columns={promoterlogHeader}
            />
          }
        />
      </div>
    </>
  );
};

export default PromoterLog;
