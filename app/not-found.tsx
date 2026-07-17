import Layout from "../Components/Layout/Layout";
import classes from "./not-found.module.css";

export default function NotFound() {
  return (
    <Layout>
      <section className={classes.container}>
        <span className={`eyebrow ${classes.eyebrow}`}>404 / not found</span>
        <h1>This page isn&apos;t in the survey.</h1>
        <p>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Head back to the homepage to keep exploring.
        </p>
      </section>
    </Layout>
  );
}
