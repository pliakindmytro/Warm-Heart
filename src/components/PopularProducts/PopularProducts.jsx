import Slider from "../PopularSlider/Slider";
import Loader from "../Loader/Loader";

import useFetch from "../../hooks/useFetch";

import styles from "./PopularProducts.module.css";

export default function PopularProducts() {
  const [data, loading, error] = useFetch("http://localhost:3001/products?isPopular=true");

  return (
    <div className={styles.popular}>
      <h2 className={styles.title}>Popular products</h2>

      {loading && <Loader />}
      {data && <Slider products={data} initialSlide={4} />}
    </div>
  );
}
