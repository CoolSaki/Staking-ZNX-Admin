import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const SideBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "250px",
      minWidth: "250px",
      backgroundColor: "#21263F",
      padding: "0px 20px 50px 20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      [theme.breakpoints.down(680)]: {
        display: "none"
      },
    },
    logContent: {
      borderBottom: "solid 1px #9b9fbe",
      padding: "10px 10px 30px 10px",
      marginTop: "30px",
    },
    logoContent: {
      color: "white",
      textDecoration: "unset",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: "40px",
      height: "40px",
    },
    logoName: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "32px",
      color: "#FFFFFF",
      marginLeft: "10px",
    },
    sidebarContent: {
      padding: "50px 0px 0px 10px",
    },
    sidebarBtn: {
      padding: "6px 0px 7px 10px",
      color: "#9B9FBE",
      fontSize: "23px",
      cursor: "pointer",
      fontFamily: "Lato",
      "&:hover":{
        color: "#ffffff"
      },
    },
    margintop: {
      marginTop: "20px",
    },
    plusBorder: {
      color: "#ffffff"
    },
    mobileRoot:{
      [theme.breakpoints.up(680)]: {
        display: "none"
      },
      [theme.breakpoints.down(680)]: {
        display: "flex"
      },
      minWidth:"50px",
      flexDirection: "column",
      justifyContent:"start",
      backgroundColor: "#21263f",
      position: "relative",
    },
    iconMobile:{
      color: "#ffffff",
      margin: "20px 10px",
    },
    sidebarMobileContainer:{
      position: "absolute",
      backgroundColor: "#21263f",
      width: "250px",
      minWidth: "250px",
      flexDirection: "column",
      justifyContent: "start",
      zIndex: 10,
      height: "100%",
      top: "0",
      left: "50px",
      padding: "0px 20px 0px 20px",
      borderLeft: "solid 1px #2c3252",
    },
    displayNone: {
      display: "none"
    }
  })
);
