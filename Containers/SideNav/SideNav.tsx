"use client";

import classes from "./SideNav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavItems } from "../../Utilities/navitems";
import Logo from "../../Components/Logo/Logo";

const SideNav = () => {
  // Utils
  const navRoutes = headerNavItems?.filter((d) => {
    return d?.route;
  });

  //   Router
  const pathname = usePathname();
  return (
    <section className={classes.container}>
      <Logo />

      <div className={classes.routesSection}>
        {navRoutes.map((data, i) => {
          return (
            <Link
              href={data.route as string}
              key={i}
              className={
                pathname === data?.route ? classes.active : classes.inActive
              }
            >
              {data.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideNav;
