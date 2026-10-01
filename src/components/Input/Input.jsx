import styles from "./Input.module.css";

export default function Input({ placeholder, lessHeight = false }) {
  return (
    <div className={`${styles.wrapper} ${lessHeight ? styles.less : ""}`}>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
