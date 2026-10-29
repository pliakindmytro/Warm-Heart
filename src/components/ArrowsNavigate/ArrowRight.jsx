import styles from "./Arrows.module.css";

export default function ArrowRight({ onClick }) {
  return (
    <button className={styles.right} onClick={onClick}>
      <svg
        width="30"
        height="20"
        viewBox="0 0 33 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 11.5H31.5M20.5 21.5L31.5 11.5L20.5 1.5"
          stroke="#2C2C2C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
