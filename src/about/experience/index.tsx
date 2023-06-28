import {
  BackendIcon,
  CloudIcon,
  FrontendIcon,
  InfinityIcon,
} from "../../icons/icons";
import useStyles from "./styles";

const Experience = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.categoryContainer}>
        <div className={classes.iconContainer}>
          <FrontendIcon width={30} height={30} />
        </div>
        <div>
          With 6.5 years in React, I have strong proficiency in JavaScript. I've
          been the core contributor to numerous enterprise systems in
          production. With most of my time being spent on websites, I've also
          used React Native to bring some mobile apps to life.
        </div>
      </div>

      <div className={classes.categoryContainer}>
        <div className={classes.iconContainer}>
          <BackendIcon width={30} height={30} />
        </div>
        <div>
          My backend experience has been evenly split between C# and Java, with
          Java being more recent. I've helped integrate with numerous APIs and
          DBs.
        </div>
      </div>

      <div className={classes.categoryContainer}>
        <div className={classes.iconContainer}>
          <CloudIcon width={35} height={35} />
        </div>
        <div>
          Although I've had some exposure to GCP and local servers, my main
          experience has been with AWS. And while I can't claim to be a complete
          expert, I have configured DNS into subdomains via Route 53 and used
          Elastic Beanstalk / Amplify to setup an automated build process.
        </div>
      </div>
    </div>
  );
};

export default Experience;
