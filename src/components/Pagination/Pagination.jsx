import styles from "./Pagination.module.css";

export default function Pagination() {
  return (
    <div className={styles.wrapper}>
      <svg
        width="33"
        height="23"
        viewBox="0 0 33 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.left}
      >
        <path
          d="M31.5 11.5H1.5M12.5 21.5L1.5 11.5L12.5 1.5"
          stroke="#2C2C2C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className={`${styles.page} ${styles.active}`}>1</div>
      <div className={styles.page}>2</div>

      <svg
        width="33"
        height="23"
        viewBox="0 0 33 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.right}
      >
        <path
          d="M1.5 11.5H31.5M20.5 21.5L31.5 11.5L20.5 1.5"
          stroke="#2C2C2C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
