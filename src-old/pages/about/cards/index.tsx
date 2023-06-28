import useStyles from "./styles";

const Cards = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.card}>
          <div className={classes.iconContainer}>
            <div className={classes.icon}>
              <img
                src={require("../../../core/icons/frontend.svg").default}
                alt="menu"
              />
            </div>
          </div>
          <div className={classes.title}>Frontend</div>
          <div>
            <div>As you can see, I value simple yet thoughtful design.</div>
            <br />
            <div>
              While I have had to maintain and modernise an old CoffeeScript
              codebase and dabble with some JSPs, my frontend experience has
              been primarily with React. The package I've been most impressed
              with recently has been Zustand.
            </div>
            <br />
            <div>
              I've spent the last 2 years primarily in a front end role.
            </div>
          </div>
        </div>

        <div className={classes.card + " " + classes.middle}>
          <div className={classes.iconContainer}>
            <div className={classes.icon}>
              <img
                src={require("../../../core/icons/backend.svg").default}
                alt="menu"
              />
            </div>
          </div>
          <div className={classes.title}>Backend</div>
          <div>
            The bulk of my professional backend experience has been with C#.
            I've used the ServiceStack framework in a number of projects as it
            makes life very easy. I've found Hangfire to be a great tool for
            running scheduled jobs.
          </div>
          <br />
          <div>
            My first years experience was exclusively in a Java role using JSP.
            I've been doing a little more Java in recent years and in June 2022
            achieved Oracles IZ0-808 certification.
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.iconContainer}>
            <div className={classes.icon}>
              <img
                src={require("../../../core/icons/everything.svg").default}
                alt="menu"
              />
            </div>
          </div>
          <div className={classes.title}>Everything Else</div>
          <div>I've worked with a range of both SQL and NoSQL DBs.</div>
          <br />
          <div>
            Although I can't claim to be an expert, recently I've worked on both
            GCP and AWS projects. It's the area that I'm trying to improve upon
            the most.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
