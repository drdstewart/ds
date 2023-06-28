import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    marginTop: 40,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    "@media(max-width: 700px)": {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },

  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 20,
    width: "100%",
    color: "#3C2A21",
  },

  images: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    columnGap: 20,
    width: "100%",
    maxWidth: 900,
    alignItems: "center",
    justifyItems: "center",

    "@media(max-width: 700px)": {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr",
    },
  },

  image: {
    width: "100%",
    maxWidth: 200,
    // margin: 30,
  },
});

export default useStyles;
