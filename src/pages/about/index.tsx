import Heading from "../../core/heading";
import Cards from "./cards";
import Companies from "./companies";
import Intro from "./intro";
import useStyles from "./styles";

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Heading text="Make Things Simple" />
      <div className={classes.imageContainer}>
        <img alt="software" src="work.webp" className={classes.image} />
      </div>
      <Intro />
      <Cards />
      <Companies />
      <div className={classes.buttonContainer}>
        <div className={classes.button}>
          <img src={require("../../core/icons/call.svg").default} alt="menu" />
          <div>Want to know more? Get in touch!</div>
        </div>
      </div>
    </div>
  );
};

export default About;
