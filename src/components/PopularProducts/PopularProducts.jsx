import Slider from "../PopularSlider/Slider";

import { popularProducts } from "../../data/popularProducts";

import styles from "./PopularProducts.module.css";

export default function PopularProducts() {
  return (
    <div className={styles.popular}>
      <h2 className={styles.title}>Popular products</h2>

      <Slider products={popularProducts} initialSlide={4} />
    </div>
  );
}
