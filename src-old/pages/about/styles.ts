import { createUseStyles } from "react-jss";
import Colours from "../../utils/colours";

const useStyles = createUseStyles({
  image: {
    maxWidth: 600,
    width: "100%",
    zIndex: -1,
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },

  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: Colours.main,
    color: "white",
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    fontWeight: "bold",
    marginBottom: 50,
  },
});

export default useStyles;
