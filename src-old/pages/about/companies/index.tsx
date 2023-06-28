import useStyles from "./styles";

const Companies = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        I've worked with some great companies over the years
      </div>
      <div className={classes.images}>
        <img src="nrs.jpeg" alt="nrs" className={classes.image} />
        <img src="etain.png" alt="etain" className={classes.image} />
        <img src="allenovery.jpeg" alt="allenovery" className={classes.image} />
        <img src="aquaq.png" alt="aquaq" className={classes.image} />
        <img src="bluezinc.png" alt="bluezinc" className={classes.image} />
        <img src="tesc.png" alt="tuzzl" className={classes.image} />
      </div>
    </div>
  );
};

export default Companies;
