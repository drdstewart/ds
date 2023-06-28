import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },

  categoryContainer: {
    display: "flex",
    alignItems: "center",

    "@media(max-width: 700px)": {
      flexDirection: "column",
      padding: 10,
      textAlign: "justify",
    },
  },

  iconContainer: {
    flexShrink: 0,
    width: 50,
    height: 50,
    backgroundColor: "#bfa186",
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1A120B",
    marginRight: 30,
  },
});

export default useStyles;
