import Button from "../Button/Button";

import styles from "./FiltersBlock.module.css";

export default function FiltersBlock({ filter, onClick }) {
  return (
    <div className={styles.block}>
      <Button className={styles.btn} onClick={() => onClick(filter)}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5M5 5L9 9M5 5L9 1M5 5L1 9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#FDFBF9"
          />
        </svg>
      </Button>

      <div className={styles.description}>{filter}</div>
    </div>
  );
}
