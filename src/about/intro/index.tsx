import { CallIcon, CodeIcon } from "../../icons/icons";
import useStyles from "./styles";

interface Props {
  scrollToBottom: () => void;
}

const Introduction = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.heading}>DAVID STEWART</div>
      <div className={classes.centerContainer}>
        <CodeIcon height={150} width={150} />
      </div>
      <div>
        With 7.5 years of professional experience in the industry, I would
        consider myself a battle tested software engineer. My journey started
        over 15 years ago through ActionScript and has progressively spiralled
        out of control.
      </div>

      <br />
      <br />

      <div>
        My career has saw me working in the medical, financial and energy
        sectors. In each of these industries I have helped bring projects from a
        concept through to design, development, testing and release. I will
        always embrace new challenges to refine my skills.
      </div>

      <br />
      <br />

      <div>
        Outside of work, I'm a big music enthusiast. You'll usually find me with
        headphones on. I also love playing chess and going for a dip in the sea.
      </div>

      <br />

      <div className={classes.centerContainer}>
        <button className={classes.button} onClick={props.scrollToBottom}>
          <CallIcon height={25} width={25} className={classes.phoneIcon} />
          <div>Get In Contact</div>
        </button>
      </div>
    </div>
  );
};

export default Introduction;
