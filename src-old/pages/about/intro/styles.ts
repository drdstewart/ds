import { createUseStyles } from "react-jss";
import Colours from "../../../utils/colours";

const useStyles = createUseStyles({
  container: {
    marginTop: -30,
    backgroundColor: Colours.main,
    padding: 10,
    paddingBottom: 200,
    display: "flex",
    justifyContent: "center",
    zIndex: 100,
  },

  innerBlock: {
    maxWidth: 600,
    color: "white",
    fontSize: 20,
    textAlign: "justify",
    paddingTop: 20,
  },

  heading: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
  },
});

export default useStyles;
