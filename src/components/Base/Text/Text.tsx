import { useStyles } from "./TextStyle";

interface LargeTitleProps {
  children?: React.ReactNode;
}

export const LargeTitle = ({ children }: LargeTitleProps) => {
  const classes = useStyles();
  return <div className={classes.LargeTitle}>{children}</div>;
};

export const SmallTitle = ({ children }: LargeTitleProps) => {
  const classes = useStyles();
  return <div className={classes.SmallTitle}>{children}</div>;
};
