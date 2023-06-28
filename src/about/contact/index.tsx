import { CallIcon, EmailIcon, PhoneOutlinedIcon } from "../../icons/icons";
import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>Want to get in touch? </div>
      <br />
      <div>
        If you've got any projects that you think I'd be interested in, you can
        get in contact with me at:
      </div>

      <br />

      <div className={classes.emailContainer}>
        <EmailIcon className={classes.iconContainer} width={40} height={40} />
        <div>d@vidstew.art</div>
      </div>

      <div className={classes.emailContainer}>
        <PhoneOutlinedIcon
          style={{ marginLeft: -10, paddingRight: 10 }}
          className={classes.iconContainer}
          width={60}
          height={60}
        />
        <div>+447923029945</div>
      </div>
    </div>
  );
};

export default Contact;
