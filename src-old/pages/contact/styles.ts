import { createUseStyles } from "react-jss";
import Colours from "../../utils/colours";

const useStyles = createUseStyles({
  container: {
    backgroundColor: Colours.main,
    padding: 20,
    color: "white",
    // height: "100vh",
  },

  heading: {
    fontSize: 90,
    fontFamily: "Russo One",
  },
});

export default useStyles;
