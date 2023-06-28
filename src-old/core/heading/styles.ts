import { createUseStyles } from "react-jss";
import Colours from "../../utils/colours";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },

  parentheses: {
    color: Colours.main,
    fontSize: 50,
    fontFamily: "Russo One",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default useStyles;
