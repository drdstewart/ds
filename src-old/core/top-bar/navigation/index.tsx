import { useLocation, useNavigate } from "react-router-dom";
import { classicNameResolver } from "typescript";
import useStyles from "./styles";

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <NavItem name="About" route="/about" />
      <NavItem name="Resume" route="/resume" />
      <NavItem name="Contact" route="/contact" />
    </div>
  );
};

interface ItemProps {
  name: string;
  route: string;
}

const NavItem = (props: ItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  const className =
    location.pathname === props.route ? classes.buttonSelected : classes.button;

  return (
    <button className={className} onClick={() => navigate(props.route)}>
      {props.name}
    </button>
  );
};

export default Navigation;
