import { ReactNode } from "react";
import useStyles from "./styles";

interface Props {
  children: ReactNode;
}

const Block = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>{props.children}</div>
    </div>
  );
};

export default Block;
