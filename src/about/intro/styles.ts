import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    textAlign: "justify",
    fontSize: 18,
    padding: 10,
  },

  heading: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 40,
    fontFamily: "Megrim",
    fontSize: 40,
  },

  centerContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },

  button: {
    all: "unset",
    display: "flex",
    alignItems: "center",
    color: "#1A120B",
    cursor: "pointer",
    backgroundColor: "#D5CEA3",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 3,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Cairo",

    "&:hover": {
      opacity: 0.7,
    },
  },

  phoneIcon: {
    paddingRight: 10,
  },
});

export default useStyles;
