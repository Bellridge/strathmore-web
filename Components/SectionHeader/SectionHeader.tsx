import classes from "./SectionHeader.module.css";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
};

const SectionHeader = ({ eyebrow, title }: SectionHeaderProps) => {
  return (
    <div className={classes.container}>
      {eyebrow && <span className={`eyebrow ${classes.eyebrow}`}>{eyebrow}</span>}
      <h2 className={classes.title}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
