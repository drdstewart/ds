import { createUseStyles } from "react-jss";
import Colours from "../../../utils/colours";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    backgroundColor: "white",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  title: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Russo One",
    fontSize: 25,
    color: Colours.main,
  },

  back: {
    position: "absolute",
    padding: 10,
  },

  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    all: "unset",
    cursor: "pointer",
    width: 150,
    padding: 10,
    border: "1px solid grey",
    textAlign: "center",
    marginTop: 50,
  },

  buttonSelected: {
    color: Colours.main,
    fontWeight: "bold",
  },
});

export default useStyles;
