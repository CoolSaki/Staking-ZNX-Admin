import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  dateinputRoot: {
    "& .MuiFormControl-root": {
      flexDirection: "unset",
      flexGrow: 1,
    }
  },
  dateRoot:{
    display: "flex",
    border: "1px solid #373F66 !important",
    borderRadius: "100px",
    alignItems: "center",
    alignContent: "center",
    padding: "5px",
    "& .MuiFormControl-marginNormal":{
      marginBottom: "unset"
    }
  },
  dateStart: {
    fontSize: "16px",
    lineHeight: "19px",
    marginLeft: "10px",
    color: "#9B9FBE",
    minWidth: "55px",
    borderRight: "1px solid #373F66",
  },
  datePicker:{
    flexDirection: "unset",
    color: "white",
    "& .MuiInputLabel-animated": {
      transition: "unset !important"
    },
    "& .MuiInputLabel-shrink": {
      transform: "unset",
      transformOrigin : "unset",
    },
    "& .MuiFormLabel-root.Mui-focused" : {
      color: "unset"
    },
    "& .MuiInputLabel-formControl": {
      position: "unset",
      top: "unset",
      left: "unset",
      transform: "unset",
    },
    "&:before": {
      borderBottom: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
    "& .MuiInput-root":{
      flexGrow: 1,
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "10px",
      borderBottom: "none",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
      padding: "6px 0px 6px"
    },
    "&.MuiFormControl-marginNormal": {
      marginTop: "0px",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
  }
}));
