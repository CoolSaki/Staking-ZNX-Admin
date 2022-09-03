import { Theme, makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import SideBar from "./SideBar/SideBar";
import { Navigate, Outlet } from "react-router-dom";
import BackgroundImg from "../../assets/images/background.png";
import { selectLoginStatus } from "../../store/auth/selectors";
import { useAppSelector } from "../../store/hooks";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    backgroundColor: "black",
    flexGrow: 1,
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "calc(100% - 290px)"
  },
}));

export default function Layout() {
  const classes = useStyles();
  const loginStatus = useAppSelector(selectLoginStatus);
  return loginStatus ? (
    <Box className={classes.root}>
      <SideBar />
      <Box className={classes.container}>
        <Outlet />
      </Box>
    </Box>
  ) : (
    <Navigate to="/login" />
  );
}
