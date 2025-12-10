import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={classes.container}>
      <img src={"/images/logo.png"} alt="Strathmore Logo" />
    </Link>
  );
};

export default Logo;
