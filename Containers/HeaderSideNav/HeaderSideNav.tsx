import SideNav from "../SideNav/SideNav";
import classes from "./HeaderSideNav.module.css";
import { X } from "lucide-react";

type HeaderSideNavProps = {
  closeSideNav: () => void;
};

const HeaderSideNav = ({ closeSideNav }: HeaderSideNavProps) => {
  return (
    <section className={classes.container}>
      <button
        type="button"
        className={classes.close}
        onClick={closeSideNav}
        aria-label="Close menu"
      >
        <X size={22} strokeWidth={1.75} />
      </button>
      <SideNav />
    </section>
  );
};

export default HeaderSideNav;
