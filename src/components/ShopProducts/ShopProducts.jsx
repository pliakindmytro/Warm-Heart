import { useState } from "react";

import useFetch from "../../hooks/useFetch";

import Filters from "../Filters/Filters";
import ShopCard from "../ShopCard/ShopCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

import styles from "./ShopProducts.module.css";

export default function ShopProducts() {
  const [data, loading, error] = useFetch("http://localhost:3001/products");

  const [currentPage, setCurrentPage] = useState(1);

  const visibleProducts = 12;

  const totalPages = Math.ceil(data?.length / visibleProducts);

  const startIndex = (currentPage - 1) * visibleProducts;

  const currentProducts = data?.slice(startIndex, startIndex + visibleProducts);

  return (
    <div className={styles.shop}>
      <Filters />

      {loading && <Loader />}

      <ul className={styles.wrapper}>
        {currentProducts?.map((product) => (
          <ShopCard product={product} key={product.id} />
        ))}
      </ul>

      {data?.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
