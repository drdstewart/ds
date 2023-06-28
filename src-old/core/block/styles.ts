import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#251198",
    padding: 10,
    paddingBottom: 200,
    display: "flex",
    justifyContent: "center",
  },

  innerContainer: {
    maxWidth: 600,
    color: "white",
    fontSize: 20,
  },
});

export default useStyles;
