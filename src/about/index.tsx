import { useState } from "react";
import Companies from "./companies";
import Experience from "./experience";
import Introduction from "./intro";
import useStyles from "./styles";
import { Scrollama, Step } from "react-scrollama";
import Contact from "./contact";

const AboutPage = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<any>(null);
  const [experienceActive, setExperienceActive] = useState(false);
  const [companiesActive, setCompaniesActive] = useState(false);

  const classes = useStyles();

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }: any) => {
    setCurrentStepIndex(data);

    if (data === 2) setExperienceActive(true);
    if (data === 3) setCompaniesActive(true);
  };

  const scrollToBottom = () => {
    setExperienceActive(true);
    setCompaniesActive(true);
    window.scrollTo(0, document.body.scrollHeight);
  };

  const innerExperienceStyle = [classes.innerContainer];
  if (experienceActive) innerExperienceStyle.push(classes.appear);

  const innerCompaniesStyle = [classes.innerContainer];
  if (companiesActive) innerCompaniesStyle.push(classes.appear);

  return (
    <div>
      <Scrollama offset={0.75} onStepEnter={onStepEnter}>
        <Step data={1} key={1}>
          <div className={classes.firstSection}>
            <div className={classes.innerContainer + " " + classes.appear}>
              <Introduction scrollToBottom={scrollToBottom} />
            </div>
          </div>
        </Step>

        <Step data={2} key={2}>
          <div className={classes.secondSection}>
            <div className={innerExperienceStyle.join(" ")}>
              <Experience />
            </div>
          </div>
        </Step>

        <Step data={3} key={3}>
          <div className={classes.thirdContainer}>
            <div className={innerCompaniesStyle.join(" ")}>
              <Companies />
            </div>
          </div>
        </Step>

        <Step data={4} key={4}>
          <div className={classes.fourthSection}>
            <div className={innerCompaniesStyle.join(" ")}>
              <Contact />
            </div>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default AboutPage;
