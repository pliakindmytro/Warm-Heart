import styles from "./Purchases.module.css";

import Bag from "../Bag/Bag";
import AuthLink from "../AuthLink/AuthLink";

export default function Purchases() {
  return (
    <div className={styles.purchases}>
      <AuthLink />

      <Bag classCart="cart" />
    </div>
  );
}
