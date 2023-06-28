import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./styles";

const NavigationMobile = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={require("../../icons/hamburger.svg").default}
        alt="menu"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className={classes.container}>
          <img
            src={require("../../icons/back.svg").default}
            alt="back"
            className={classes.back}
            onClick={() => setOpen(false)}
          />
          <div className={classes.title}>David Stewart</div>
          <div className={classes.buttonsContainer}>
            <NavItem
              name="About"
              route="/about"
              onClose={() => setOpen(false)}
            />
            <NavItem
              name="Resume"
              route="/resume"
              onClose={() => setOpen(false)}
            />
            <NavItem
              name="Contact"
              route="/contact"
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

interface NavProps {
  name: string;
  route: string;
  onClose: () => void;
}

const NavItem = (props: NavProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  const classNames = [classes.button];
  if (location.pathname === props.route) {
    classNames.push(classes.buttonSelected);
  }

  const onClick = () => {
    navigate(props.route);
    props.onClose();
  };

  return (
    <div>
      <button className={classNames.join(" ")} onClick={onClick}>
        {props.name}
      </button>
    </div>
  );
};

export default NavigationMobile;
