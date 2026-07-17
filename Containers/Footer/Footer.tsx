import classes from "./Footer.module.css";
import { footerNavItems } from "../../Utilities/navitems";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={`container ${classes.topSection}`}>
        <div className={classes.routesSection}>
          {footerNavItems.map((data, i) => {
            return (
              <div key={i} className={classes.routes}>
                <span className={`eyebrow ${classes.label}`}>{data.title}</span>
                <div className={classes.otherOptions}>
                  {data?.otherOptions?.map((datum, j) => {
                    if (!datum.route) {
                      return (
                        <span className={classes.address} key={j}>
                          {datum.title}
                        </span>
                      );
                    }

                    if (!datum?.isInternal) {
                      return (
                        <a href={datum.route} className={classes.link} key={j}>
                          {datum.title}
                        </a>
                      );
                    }

                    return (
                      <Link href={datum.route} className={classes.link} key={j}>
                        {datum.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`container ${classes.bottomSection}`}>
        &copy; {new Date().getFullYear()} Strathmore Energy Limited
      </div>
    </footer>
  );
};

export default Footer;
