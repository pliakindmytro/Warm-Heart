import Slider from "../PopularSlider/Slider";

import { popularProducts } from "../../data/popularProducts";

import styles from "./MayAlsoLike.module.css";

export default function MayAlsoLike() {
  return (
    <div className={styles.alsoLike}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>You may also like</h2>
        <Slider products={popularProducts} initialSlide={2} />
      </div>
    </div>
  );
}
