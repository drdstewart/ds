import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../utils/get-dimensions";
import Navigation from "./navigation";
import NavigationMobile from "./navigation-mobile";
import useStyles from "./styles";

const TopBar = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <button className={classes.logo} onClick={() => navigate("/about")}>
        DS
      </button>
      <div>
        <div className={classes.contact}>Contact:</div>
        <div className={classes.email}>d@vidstew.art</div>
      </div>
    </div>
  );
};

export default TopBar;
