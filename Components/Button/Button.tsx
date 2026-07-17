import classes from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
};

const Button = ({ children, href, onClick, disabled }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} className={classes.button} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
