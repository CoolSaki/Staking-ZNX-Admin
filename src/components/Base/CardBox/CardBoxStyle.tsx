import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#1F213A",
      borderRadius: "6px",
      maxWidth: "500px",
      width: "100%",
      margin: "0px 20px",
      padding: "40px 40px",
    },
  })
);
