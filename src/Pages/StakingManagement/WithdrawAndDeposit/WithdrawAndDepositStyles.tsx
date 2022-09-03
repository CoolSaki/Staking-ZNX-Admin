import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      overflow: "hidden",
    },
    title: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "22px",
      color: "#ffffff",
      margin: "50px auto 10px 10px",
    },
    tableRoot: {
      marginTop: "50px",
    },
  })
);
