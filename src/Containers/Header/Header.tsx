import classes from "./Header.module.css";
import { headerNavItems, headerNavItemsType } from "../../Utilities/navitems";
import HeaderSideNav from "../HeaderSideNav/HeaderSideNav";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";

const Header = () => {
  const sideNav = useRef<HTMLDivElement>(null);

  // Router
  const navigate = useNavigate();
  const location = useLocation();

  const openSideNav = () => {
    if (sideNav.current) sideNav.current.style.width = "100%";
  };

  const closeSideNav = () => {
    if (sideNav.current) sideNav.current.style.width = "0%";
  };

  return (
    <section className={classes.container}>
      <Logo />

      <div className={classes.routesSection}>
        {headerNavItems.map((navItem, i) => {
          const isActive =
            (location?.pathname as string) === (navItem.route as string);

          const handleClick = (
            e: React.MouseEvent,
            navItem: headerNavItemsType
          ) => {
            e.preventDefault();
            if (navItem?.route) {
              navigate(navItem.route);
            } else {
              const section = document.getElementById(
                navItem?.sectionId as string
              );
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }
          };

          return (
            <div
              key={i}
              className={isActive ? classes.active : classes.inActive}
              onClick={(e) => handleClick(e, navItem)}
            >
              <span>{navItem.title}</span>
            </div>
          );
        })}
      </div>

      <div className={classes.hamburgerMenu} onClick={openSideNav}>
        <MenuIcon />
      </div>

      <div className={classes.sideNav} ref={sideNav}>
        <HeaderSideNav closeSideNav={closeSideNav} />
      </div>
    </section>
  );
};

export default Header;
