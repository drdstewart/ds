import { createUseStyles } from "react-jss";
import Colours from "../../../utils/colours";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: -150,
  },

  innerContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    maxWidth: 1200,
    borderRadius: 10,
    backgroundColor: "white",
    border: "2px solid " + Colours.main,
    margin: 10,
    "@media(max-width: 1100px)": {
      gridTemplateColumns: "1fr",
    },
  },

  card: {
    padding: 15,
    minWidth: 300,
  },

  middle: {
    borderLeft: "1px solid " + Colours.main,
    borderRight: "1px solid " + Colours.main,

    "@media(max-width: 1100px)": {
      borderLeft: "none",
      borderRight: "none",
      borderTop: "1px solid " + Colours.main,
      borderBottom: "1px solid " + Colours.main,
    },
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colours.secondary,
    height: 60,
    width: 60,
    borderRadius: 50,
  },

  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },

  subheading: {
    color: Colours.main,
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default useStyles;
