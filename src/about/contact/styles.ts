import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    "@media(max-width: 700px)": {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },

  title: {
    fontFamily: "Cairo",
    fontSize: 26,
    paddingTop: 20,
  },

  emailContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: 24,
    marginTop: 10,
  },

  iconContainer: {
    paddingRight: 20,
  },
});

export default useStyles;
