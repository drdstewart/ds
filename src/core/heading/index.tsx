import useStyles from "./styles";

interface Props {
  text: string;
}

const Heading = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.parentheses}>{"{"}</div>
      <div className={classes.text}>{props.text}</div>
      <div className={classes.parentheses}>{"}"}</div>
    </div>
  );
};

export default Heading;
