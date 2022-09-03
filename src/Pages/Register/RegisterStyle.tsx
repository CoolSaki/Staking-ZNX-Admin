import { Theme, makeStyles } from "@material-ui/core/styles";
import BackgroundImg from "../../assets/images/background.png";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: "50px",
  },
  loginItems: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    margin: "20px 0px",
    [theme.breakpoints.down(450)]: {
      display: "grid",
      "& .MuiInputBase-root": {
        marginTop: "10px",
      },
    },
  },
  smallTitle: {
    width: "300px",
    marginTop: "8px",
  },
  footer: {
    textAlign: "right",
    marginTop: "40px",
  },
  loginBtn: {
    padding: "10px",
  },
  link: {
    textAlign: "right",
    fontSize: "15px",
    color: "#ffffff",
    cursor: "pointer",
    "&:hover": {
      color: "#2D64F1",
      textDecoration: "underline",
    },
  },
}));
