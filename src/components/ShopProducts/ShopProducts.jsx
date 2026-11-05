import { useState } from "react";

import useFetch from "../../hooks/useFetch";

import Filters from "../Filters/Filters";
import ShopCard from "../ShopCard/ShopCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

import styles from "./ShopProducts.module.css";
import FiltersBlock from "../FiltersBlock/FiltersBlock";

export default function ShopProducts() {
  const [data, loading, error] = useFetch("http://localhost:3001/products");

  const [filters, setFilters] = useState({
    size: [],
    color: [],
    material: [],
    price: [],
  });

  const filtredData = data?.filter((product) => {
    return (
      (filters.size.length === 0 || filters.size.includes(product.size)) &&
      (filters.color.length === 0 || filters.color.includes(product.color)) &&
      (filters.material.length === 0 || filters.material.includes(product.material)) &&
      (filters.price.length === 0 || filters.price.includes(`€${product.price}`))
    );
  });

  const [currentPage, setCurrentPage] = useState(1);

  const visibleProducts = 12;
  const totalPages = Math.ceil(data?.length / visibleProducts);
  const startIndex = (currentPage - 1) * visibleProducts;
  const currentProducts = filtredData?.slice(startIndex, startIndex + visibleProducts);

  const handleUpdateFilters = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  const handleRemoveFilter = (filter) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };

      Object.keys(updatedFilters).forEach((key) => {
        updatedFilters[key] = updatedFilters[key].filter((item) => item !== filter);
      });

      return updatedFilters;
    });
  };

  return (
    <div className={styles.shop}>
      <Filters length={data?.length} handleUpdateFilters={handleUpdateFilters} />

      <section className={styles.section}>
        {Object.values(filters)
          .flat()
          .map((item) => (
            <FiltersBlock key={item} filter={item} onClick={handleRemoveFilter} />
          ))}
      </section>

      {loading && <Loader />}

      <ul className={styles.wrapper}>
        {currentProducts?.map((product) => (
          <ShopCard product={product} key={product.id} />
        ))}
      </ul>

      {filtredData?.length > 12 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
