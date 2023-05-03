import { createUseStyles } from "react-jss";
import Colours from "../../../utils/colours";

const useStyles = createUseStyles({
  container: {
    display: "flex",
  },

  button: {
    all: "unset",
    cursor: "pointer",
    width: 80,
  },

  buttonSelected: {
    all: "unset",
    cursor: "pointer",
    width: 80,
    color: Colours.main,
    fontWeight: "bold",
  },
});

export default useStyles;
