import Block from "../../core/block";
import Heading from "../../core/heading";
import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.heading}>Get in Touch</div>
      <div>You can reach me at my personal email:</div>
      <div>d@vidstew.art</div>
      <br />
      <div>My current work email:</div>
      <div>david.stewart@aquaq.co.uk</div>
      <br />
      <div>Or give me a call on:</div>
      <div>07923029945</div>
    </div>
  );
};

export default Contact;
