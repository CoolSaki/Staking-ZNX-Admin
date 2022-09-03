import { useStyles } from "./TableContentStyles";
import { TableRow, TableCell } from "@material-ui/core";
import clsx from "clsx";
import TableRoot from "../../../../components/Base/Table/TableBase/TableRoot";
import { ethers } from "ethers";
import { addCommas, dateConvert } from "../../../../config/utils";

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
            <TableCell className={clsx(classes.tableCell)}>{key + 1}</TableCell>
            <TableCell className={clsx(classes.tableCell)}>{row[4]}</TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row[1].toString()}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row[0].toString()}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {addCommas(ethers.utils.formatUnits(row[2], 18))} ZNX
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              <div>{row[3].toString()}</div>
              <div>({dateConvert(row[3].toNumber())})</div>
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
