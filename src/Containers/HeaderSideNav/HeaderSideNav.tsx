import SideNav from "../SideNav/SideNav";
import classes from "./HeaderSideNav.module.css";
import CloseIcon from "@mui/icons-material/Close";

type HeaderSideNavProps = {
  closeSideNav: () => void;
};

const HeaderSideNav = ({ closeSideNav }: HeaderSideNavProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.close}>
        <CloseIcon onClick={closeSideNav} />
      </div>
      <SideNav />
    </section>
  );
};

export default HeaderSideNav;
