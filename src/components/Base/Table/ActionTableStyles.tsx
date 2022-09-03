import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core/styles";
import { Box, NativeSelect, InputBase } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  paginationContainer: {
    display: "flex",
    justifyContent: "space-around",
    "& .MuiTablePagination-root": {
      color: "white",
    },
    "& .MuiSelect-icon": {
      color: "white",
    },
    "& .MuiMenu-paper": {
      backgroundColor: "red !important",
    },
    [theme.breakpoints.down(900)]: {
      display: "grid",
    },
  },
  rowPerpageRoot: {
    "& .MuiButton-label": {
      color: "#ffffff",
    },
    "& .MuiMenuItem-root": {
      backgroundColor: "black",
    },
  },
  paginationRoot:{
    [theme.breakpoints.down(900)]: {
      marginTop: "20px",
    },
  },
  perPageRoot: {
    textAlign: "center"

  },
}));

export const StyledNativeSelect = withStyles({
  root: {
    "& option": {
      backgroundColor: "rgba(51,122,254,.1)!important",
    },
  },
  icon: {
    right: "8px",
    fill: "#707a8a",
  },
  selectMenu: {
    background: "red",
  },
})(NativeSelect);

export const StyledRowsPerPageBox = withStyles({
  root: {
    color: "#77838f",
    fontSize: "14px",
    fontWeight: 400,
  },
})(Box);

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      color: "#8c98a4",
      borderRadius: 4,
      position: "relative",
      backgroundColor: "rgba(51,122,254,.1)",
      border: "1px solid #7783",
      fontSize: 12,
      margin: "0 8px",
      padding: "4px 18px 8px 6px !important",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);
