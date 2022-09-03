import { useStyles } from "./CardBoxStyle";

interface CardBoxProps {
  children?: React.ReactNode;
}

const CardBox = ({ children }: CardBoxProps) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default CardBox;
