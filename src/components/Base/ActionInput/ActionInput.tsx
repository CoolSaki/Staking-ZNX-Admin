import { StyledInput, useStyles } from "./ActionInputStyles";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import ShowPassIcon from "@material-ui/icons/Visibility";
import HidePassIcon from "@material-ui/icons/VisibilityOff";

interface ActionInputProps {
  placeholder?: string;
  className?: any;
  type?: string;
  handleChange?: (e: any) => void;
  icon?: React.ReactNode;
  error?: string;
}

const ActionInput = ({
  placeholder,
  className,
  type,
  handleChange,
  icon,
  error,
}: ActionInputProps) => {
  const classes = useStyles();
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <>
      <div className={clsx(classes.inputRoot, className)}>
        {type === "search" && (
          <StyledInput
            placeholder={placeholder}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            }
          />
        )}
        {type === "password" && (
          <StyledInput
            placeholder={placeholder}
            onChange={handleChange}
            type={!showConfirmPass ? "password" : "input"}
            endAdornment={
              <InputAdornment position='end'>
                {!showConfirmPass ? (
                  <ShowPassIcon
                    className={classes.passIcon}
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                  />
                ) : (
                  <HidePassIcon
                    className={classes.passIcon}
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                  />
                )}
              </InputAdornment>
            }
          />
        )}
        {!type && (
          <StyledInput placeholder={placeholder} onChange={handleChange} />
        )}
        {error && <div className={classes.errorDescription}>{error}</div>}
      </div>
    </>
  );
};

export default ActionInput;
