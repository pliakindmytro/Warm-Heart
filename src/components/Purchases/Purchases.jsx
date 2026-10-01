import styles from "./Purchases.module.css";

import Bag from "../Bag/Bag";
import Search from "../Search/Search";

export default function Purchases() {
  return (
    <div className={styles.purchases}>
      <Search />

      <Bag classCart="cart" />
    </div>
  );
}
