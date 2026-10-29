import styles from "./Button.module.css";

export default function Button({ children, style, className, onClick }) {
  return (
    <button className={`${styles.button} ${className}`} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
