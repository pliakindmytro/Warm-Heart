import styles from "./NumButton.module.css";

export default function NumButton({ num, active = false }) {
  return <div className={`${styles.page} ${active ? styles.active : ""}`}>{num}</div>;
}
