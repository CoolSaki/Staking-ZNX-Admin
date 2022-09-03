import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    LargeTitle: {
      color: "white",
      fontSize: "30px",
      display: "flex",
      justifyContent: "space-between"
    },
    SmallTitle: {
      color: "#9B9FBE",
      fontSize: "20px",
    },
  })
);
