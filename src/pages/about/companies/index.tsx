import useStyles from "./styles";

const Companies = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        I've worked with some great companies over the years
      </div>
      <div className={classes.images}>
        <img src="./ds/nrs.jpeg" alt="nrs" className={classes.image} />
        <img src="./ds/etain.png" alt="etain" className={classes.image} />
        <img
          src="./ds/allenovery.jpeg"
          alt="./dsallenovery"
          className={classes.image}
        />
        <img src="./ds/aquaq.png" alt="aquaq" className={classes.image} />
        <img src="./ds/bluezinc.png" alt="bluezinc" className={classes.image} />
        <img src="./ds/tesc.png" alt="tuzzl" className={classes.image} />
      </div>
    </div>
  );
};

export default Companies;
