import { useEffect, useState } from "react";

import ShopCard from "../ShopCard/ShopCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

import styles from "./ShopProducts.module.css";

export default function ShopProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const request = async (url) => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Something went wrong on backend...");
        }

        const data = await res.json();
        console.log(data);

        setProducts(data);
      } catch (e) {
        setError(true);
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    };

    request("http://localhost:3001/products");
  }, []);

  return (
    <div className={styles.shop}>
      <div>filters</div>

      {loading && <Loader />}

      <ul className={styles.wrapper}>
        {products.map((product) => (
          <ShopCard product={product} key={product.id} />
        ))}
      </ul>

      {products.length > 0 && <Pagination />}
    </div>
  );
}
