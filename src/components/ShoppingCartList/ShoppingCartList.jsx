import Counter from "../Counter/Counter";

import { popularProducts } from "../../data/popularProducts";

import styles from "./ShoppingCartList.module.css";

export default function ShoppingCartList() {
  return (
    <ul className={styles.list}>
      {popularProducts.map((product, i) => (
        <Card product={product} key={product.id} isLast={i === popularProducts.length - 1} />
      ))}
    </ul>
  );
}

function Card({ product, isLast }) {
  return (
    <li className={styles.product}>
      <div className={styles.dividerTop}></div>
      <div className={styles.circle}>
        <img src={product.image} alt={product.name} className={styles.img} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.name}>{product.name}</div>

        <div className={styles.wrapperBtn}>
          <button className={styles.close}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M1 1L6 6M6 6L11 11M6 6L11 1M6 6L1 11"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="#2C2C2C"
              />
            </svg>
          </button>
        </div>

        <div className={styles.description}>{product.size}</div>

        <div className={styles.counter}>
          <Counter />
        </div>

        <div className={styles.price}>€{product.price}</div>
      </div>

      {isLast && <div className={styles.dividerBottom}></div>}
    </li>
  );
}
