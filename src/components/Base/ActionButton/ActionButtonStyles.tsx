import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionButtonRoot: {
      borderRadius: "6px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.02em",
      color: "#ffffff",
      cursor: "pointer",
    },
    actionButtonBlue: {
      background: "#2D64F1",
      "&:hover": {
        background: "#2251ca",
      },
    },
    actionButtonLightBlue: {
      background: "#19A8F5",
      "&:hover": {
        background: "#168bca",
      },
    },
    actionButtonPurple: {
      background: "#E65DFF",
      "&:hover": {
        background: "#be4dd2",
      },
    },
    actionDisableButtonBlue: {
      opacity: "0.7",
      background: "#2D64F1",
    },
    actionDisableButtonLightBlue: {
      opacity: "0.7",
      background: "#19A8F5",
    },
    actionDisableButtonPurple: {
      opacity: "0.7",
      background: "#E65DFF",
    },
  })
);
