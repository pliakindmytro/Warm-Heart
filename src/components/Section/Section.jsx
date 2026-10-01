import styles from "./Section.module.css";

export default function Section({ backgroundColor = "transparent", direction = "column", children }) {
  return (
    <section style={{ backgroundColor }} className={`${styles.section} ${styles[direction]}`}>
      {children}
    </section>
  );
}
