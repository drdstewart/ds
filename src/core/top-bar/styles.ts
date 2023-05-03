import { createUseStyles } from "react-jss";
import Colours from "../../utils/colours";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 50,
    paddingTop: 30,
    "@media(max-width: 550px)": {
      padding: 25,
    },
  },

  logo: {
    all: "unset",
    cursor: "pointer",
    color: Colours.main,
    fontFamily: "Russo One",
    fontSize: 25,
    fontWeight: "bold",
  },

  email: {
    color: Colours.main,
    fontWeight: "bold",
  },

  contact: {
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default useStyles;
