import { createUseStyles } from "react-jss";

interface Props {
  experienceActive: boolean;
  companiesActive: boolean;
}

const useStyles = createUseStyles({
  innerContainer: {
    maxWidth: 800,
    width: "100%",
    opacity: 0,
  },

  firstSection: {
    minHeight: "100vh",
    backgroundColor: "#1A120B",
    color: "#D5CEA3",
    display: "flex",
    justifyContent: "center",
    paddingBottom: 30,
  },

  secondSection: {
    minHeight: "50vh",
    backgroundColor: "#E5E5CB",
    color: "#1A120B",
    display: "flex",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },

  thirdContainer: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
  },

  fourthSection: {
    minHeight: "50vh",
    backgroundColor: "#0d0601",
    color: "#E5E5CB",
    display: "flex",
    justifyContent: "center",
  },

  appear: {
    opacity: 0,
    animation: "$slideIn 3s forwards",
  },
  "@keyframes slideIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
