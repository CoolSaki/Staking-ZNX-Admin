import {
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Theme,
} from "@material-ui/core";
import clsx from "clsx";

interface StyledTableleProps {
  columns?: any;
  rows?: any;
  parcelRows?: any;
  estateRows?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: "18px",
      textTransform: "uppercase",
      marginBottom: "16px",
      color: "#676370",
    },
    tableContainer: {
      "&.MuiTableContainer-root": {
        overflow: "auto hidden",
        border: "none",
        padding: "0px",
        marginBottom: "20px",
      },
      "& .MuiTableCell-root": {
        whiteSpace: "nowrap",
        borderBottom: "none",
      },
    },
    tableContent: {
      "&.MuiTableHead-root": {
        width: "900px",
        minWidth: "100%",
        tableLayout: "auto",
      },
    },
    tableHeaderCell: {
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: 400,
      color: "#96A1DB",
      opacity: "50%",
      fontFamily: "Lato",
      "&.MuiTableCell-root": {
        padding: "10px 10px 10px 20px",
        borderBottom: "solid 1px #282E4E",
      },
    },
    tableCell: {
      fontSize: "16px",
      fontFamily: "Lato",
      color: "white",
      fontWeight: "normal",
    },
    center: {},
  })
);

function TableRoot({ columns, rows }: StyledTableleProps) {
  const classes = useStyles();

  const tableColumns = columns?.map((column: any, key: any) => (
    <TableCell
      key={column}
      className={clsx(classes.tableHeaderCell, {
        [classes.center]: column === "Status",
      })}>
      {column}
    </TableCell>
  ));

  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table aria-label='simple table' className={classes.tableContent}>
          <TableHead>
            <TableRow>{tableColumns}</TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableRoot;
