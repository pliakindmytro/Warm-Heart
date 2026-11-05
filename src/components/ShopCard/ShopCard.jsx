import { Link } from "react-router-dom";
import styles from "./ShopCard.module.css";

export default function ShopCard({ product }) {
  return (
    <li className={styles.card}>
      <Link to={`/shop/${product.id}`}>
        <div className={styles.img}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.description}>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.size}>{product.size} cm</div>
          <div className={styles.price}>€{product.price}</div>
        </div>
      </Link>
    </li>
  );
}
