import NumButton from "../NumButton/NumButton";

import styles from "./Counter.module.css";

export default function Counter() {
  return (
    <div className={styles.counter}>
      <button className={styles.minus}>
        <svg
          width="23"
          height="3"
          viewBox="0 0 23 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.5 1.5L1.5 1.5" strokeWidth="3" strokeLinecap="round" stroke="#2C2C2C" />
        </svg>
      </button>

      <NumButton num={1} active={true} />

      <button className={styles.plus}>
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21.5V11.5M11.5 11.5L11.5 1.5M11.5 11.5L21.5 11.5M11.5 11.5L1.5 11.5"
            strokeWidth="3"
            strokeLinecap="round"
            stroke="#2C2C2C"
          />
        </svg>
      </button>
    </div>
  );
}
