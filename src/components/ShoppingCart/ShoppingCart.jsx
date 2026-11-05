import ShoppingCartList from "../ShoppingCartList/ShoppingCartList";
import OrderSummary from "../OrderSummary/OrderSummary";

import styles from "./ShoppingCart.module.css";

export default function ShoppingCart() {
  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Shopping cart</h2>

      <div className={styles.wrapper}>
        <ShoppingCartList />
        <OrderSummary />
      </div>
    </div>
  );
}
