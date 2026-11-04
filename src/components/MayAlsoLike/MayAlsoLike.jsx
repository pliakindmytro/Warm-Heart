import Slider from "../PopularSlider/Slider";
import Loader from "../Loader/Loader";

import useFetch from "../../hooks/useFetch";

import styles from "./MayAlsoLike.module.css";

export default function MayAlsoLike() {
  const [data, loading, error] = useFetch("http://localhost:3001/products?isFeatured=true");

  return (
    <div className={styles.alsoLike}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>You may also like</h2>
        {loading && <Loader />}
        {data && <Slider products={data} initialSlide={2} />}
      </div>
    </div>
  );
}
