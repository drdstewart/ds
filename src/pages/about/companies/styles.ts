import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
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
