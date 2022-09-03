import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({   
  content: {
    padding: "20px",
  },
  generalTitle: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "22px",
    color: "#ffffff",
    margin: "50px auto 10px 10px",
  },
    itemRoot: {},
    item: {
      marginBottom: "20px",
    },
    itemTitle: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "22px",
      color: "#9B9FBE",
      display: "flex",
      alignItems: "center",
    },
    itemDot: {
      minWidth: "6px",
      width: "6px",
      height: "6px",
      background: "#2D64F1",
      marginRight: "10px",
      borderRadius: "50px",
    },
    itemStatus: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "22px",
      color: "#ffffff",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      paddingLeft: "10px"
    },
    startBtn: {
      padding: "10px",
    },
  })
);
