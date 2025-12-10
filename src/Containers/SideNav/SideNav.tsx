import classes from "./SideNav.module.css";
import { Link, useLocation } from "react-router-dom";
import { headerNavItems } from "../../Utilities/navitems";
import Logo from "../../Components/Logo/Logo";

const SideNav = () => {
  // Utils
  const navRoutes = headerNavItems?.filter((d) => {
    return d?.route;
  });

  //   Router
  const location = useLocation();
  return (
    <section className={classes.container}>
      <Logo />

      <div className={classes.routesSection}>
        {navRoutes.map((data, i) => {
          return (
            <Link
              to={data.route as string}
              key={i}
              className={
                location.pathname === data?.route
                  ? classes.active
                  : classes.inActive
              }
            >
              <span>{data.icons}</span>
              <span>{data.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideNav;
