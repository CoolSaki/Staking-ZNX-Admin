import { useStyles } from "./TableContentStyles";
import { TableRow, TableCell } from "@material-ui/core";
import clsx from "clsx";
import TableRoot from "../../../components/Base/Table/TableBase/TableRoot";
import { dateConvert } from "../../../config/utils";

interface StagingTableProps {
  columns?: any;
  rows: any;
  pageNumber: number;
  perPageNumber: number;
}

const TableContent = ({
  pageNumber,
  perPageNumber,
  columns,
  rows,
}: StagingTableProps) => {
  const classes = useStyles();

  const tableRows =
    rows !== undefined ? (
      rows?.map((row: any, key: any) => (
        <TableRow key={key}>
          <TableCell className={clsx(classes.tableCell)}>
            {pageNumber * perPageNumber + key + 1}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.Version}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.Account}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.Source}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.Device}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.Activity}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.Amount}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.Status}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.IPAddress}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {dateConvert(row.Timestamp)}
          </TableCell>
        </TableRow>
      ))
    ) : (
      <></>
    );
  return (
    <>
      {rows?.length === 0 || rows === null ? (
        <div className={classes.emptyTable}>No data</div>
      ) : (
        <TableRoot columns={columns} rows={tableRows} />
      )}
    </>
  );
};

export default TableContent;
