"use client";

import classes from "./Header.module.css";
import { headerNavItems, headerNavItemsType } from "../../Utilities/navitems";
import HeaderSideNav from "../HeaderSideNav/HeaderSideNav";
import { Menu } from "lucide-react";
import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../../Components/Logo/Logo";

const Header = () => {
  const sideNav = useRef<HTMLDivElement>(null);

  // Router
  const router = useRouter();
  const pathname = usePathname();

  const openSideNav = () => {
    if (sideNav.current) sideNav.current.style.width = "100%";
  };

  const closeSideNav = () => {
    if (sideNav.current) sideNav.current.style.width = "0%";
  };

  return (
    <section className={classes.bar}>
      <div className={`container ${classes.inner}`}>
        <Logo />

        <nav className={classes.routesSection} aria-label="Primary">
          {headerNavItems.map((navItem, i) => {
            const isActive = pathname === (navItem.route as string);

            const handleClick = (navItem: headerNavItemsType) => {
              if (navItem?.route) {
                router.push(navItem.route);
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
              <button
                key={i}
                type="button"
                className={isActive ? classes.active : classes.inActive}
                onClick={() => handleClick(navItem)}
                aria-current={isActive ? "page" : undefined}
              >
                {navItem.title}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          className={classes.hamburgerMenu}
          onClick={openSideNav}
          aria-label="Open menu"
        >
          <Menu size={22} strokeWidth={1.75} />
        </button>
      </div>

      <div className={classes.sideNav} ref={sideNav}>
        <HeaderSideNav closeSideNav={closeSideNav} />
      </div>
    </section>
  );
};

export default Header;
