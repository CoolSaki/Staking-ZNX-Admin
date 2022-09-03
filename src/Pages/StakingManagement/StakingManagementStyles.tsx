import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  stakingManageRoot: {
    flexGrow: 1,
    overflow: "hidden",
    padding: "50px 20px 0px 20px",
  },
  container: {
    margin: "50px auto 0px auto",
  },
  adminBtnRoot: {},
  connectwalletbtn: {
    background: "linear-gradient(91.16deg, #2d64f1 3.3%, #ff40d5 102.48%)",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "179px",
    height: "41px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "22px",
    textAlign: "right",
    color: "#ffffff",
    cursor: "pointer",
    "&:hover": {
      background: "linear-gradient(91.16deg, #2251CA 3.3%, #D838B4 102.48%)",
    },
  },
  connectedwalletbtn: {
    background: "linear-gradient(91.16deg, #2d64f1 3.3%, #ff40d5 102.48%)",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "179px",
    height: "41px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "22px",
    textAlign: "right",
    color: "#ffffff",
  },
  walletconnection: {
    minWidth: "15px",
    height: "15px",
    marginLeft: "10px",
  },
  tablesRoot:{
    
  },
  tablesTabsRoot:{
    display:"flex",
    justifyContent: "start",
    alignItems:"center",
    borderBottom: "solid 1px #31345A",
  },
  focusedTab:{
    padding: "10px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "26px",
    color: "#ffffff",
    cursor: "pointer",
    textAlign: "center",
    borderBottom: "solid 2px #2D64F1"
  },
  tab: {
    padding: "10px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
    color: "#9B9FBE",
    cursor: "pointer",
    textAlign: "center",
    "&:hover":{
      color: "#ffffff"
    }
  },
  tableContent: {
    padding: "20px"
  },
  tableItem:{
  },
  displayNone: {
    display: "none"
  },
}));
