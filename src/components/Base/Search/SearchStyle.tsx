import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableRoot: {
      marginTop: "50px !important",
    },
    searchRoot: {
      display: "flex",
    },
    searchBtn: {
      padding: "10px",
      marginLeft: "10px",
      borderRadius: "50px",
      minWidth: "100px",
    },
  })
);
