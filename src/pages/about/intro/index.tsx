import useStyles from "./styles";

const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.innerBlock}>
        <div className={classes.heading}>Senior Full Stack Engineer</div>
        Hello, I'm David Stewart. I've been working in the software industry for
        7+ years now, though I've been playing around with code for half my
        life. My interest started back when flash games ruled the internet. I
        spent hours trying to figure out ActionScript and bring my ideas to
        life. That curiosity became a hobby that's spiralled out of control and
        taken over my life! Currently working full time in Belfast/WFH, but
        always interested in new projects and opportunities.
      </div>
    </div>
  );
};

export default Intro;
