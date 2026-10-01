import styles from "./Burger.module.css";

export default function Burger({ onToggleIsOpen }) {
  return (
    <div className={styles.burger} onClick={onToggleIsOpen}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
