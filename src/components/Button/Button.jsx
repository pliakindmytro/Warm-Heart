import styles from "./Button.module.css";

export default function Button({ children, style, className }) {
  return (
    <button className={`${styles.button} ${className}`} style={style}>
      {children}
    </button>
  );
}
