import useStyles from "./styles";

const Companies = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        I've worked with some great companies over the years
      </div>
      <div className={classes.images}>
        <img src="images/nrs.jpeg" alt="nrs" className={classes.image} />
        <img src="images/etain.png" alt="etain" className={classes.image} />
        <img
          src="images/allenovery.jpeg"
          alt="allenovery"
          className={classes.image}
        />
        <img src="images/aquaq.png" alt="aquaq" className={classes.image} />
        <img
          src="images/bluezinc.png"
          alt="bluezinc"
          className={classes.image}
        />
        <img src="images/tesc.png" alt="tuzzl" className={classes.image} />
      </div>
    </div>
  );
};

export default Companies;
