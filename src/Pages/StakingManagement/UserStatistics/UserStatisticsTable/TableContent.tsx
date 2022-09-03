import { useStyles } from "./TableContentStyles";
import { TableRow, TableCell } from "@material-ui/core";
import clsx from "clsx";
import TableRoot from "../../../../components/Base/Table/TableBase/TableRoot";

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
      rows
        ?.slice(pageNumber * perPageNumber, (pageNumber + 1) * perPageNumber)
        .map((row: any, key: any) => (
          <TableRow key={key}>
            <TableCell className={clsx(classes.tableCell)}>
              {row.round}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.users} Persons
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.newusers} Persons
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.removedusers} Persons
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
