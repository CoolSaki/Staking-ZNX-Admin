import clsx from "clsx";
import { useStyles } from "./ActionButtonStyles";

interface ActionBtnProps {
  color: string;
  children?: React.ReactNode;
  className?: any;
  statusClick?: () => void;
  disable?: boolean;
}

const ActionButton = ({
  children,
  className,
  color,
  statusClick,
  disable,
}: ActionBtnProps) => {
  const classes = useStyles();

  return (
    <>
      {disable ? (
        <div
          className={clsx(classes.actionButtonRoot, className, {
            [classes.actionDisableButtonBlue]: color === "blue",
            [classes.actionDisableButtonLightBlue]: color === "lightblue",
            [classes.actionDisableButtonPurple]: color === "purple",
          })}>
          {children}
        </div>
      ) : (
        <div
          className={clsx(classes.actionButtonRoot, className, {
            [classes.actionButtonBlue]: color === "blue",
            [classes.actionButtonLightBlue]: color === "lightblue",
            [classes.actionButtonPurple]: color === "purple",
          })}
          onClick={statusClick}>
          {children}
        </div>
      )}
    </>
  );
};

export default ActionButton;
