import Link from "next/link";
import Image from "next/image";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={classes.container}>
      <Image src="/images/logo.png" alt="Strathmore Logo" width={190} height={90} priority />
    </Link>
  );
};

export default Logo;
