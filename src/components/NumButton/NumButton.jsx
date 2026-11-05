import styles from "./NumButton.module.css";

export default function NumButton({ num, active = false, onClick }) {
  return (
    <div className={`${styles.page} ${active ? styles.active : ""}`} onClick={onClick}>
      {num}
    </div>
  );
}
