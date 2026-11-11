import { useSearchParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

import Filters from "../Filters/Filters";
import ShopCard from "../ShopCard/ShopCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import FiltersBlock from "../FiltersBlock/FiltersBlock";

import styles from "./ShopProducts.module.css";

export default function ShopProducts() {
  const [data, loading, error] = useFetch("http://localhost:3001/products");
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    size: searchParams.getAll("size"),
    color: searchParams.getAll("color"),
    material: searchParams.getAll("material"),
    price: searchParams.getAll("price"),
  };

  const currentPage = Number(searchParams.get("page") || 1);

  const filtredData = data?.filter((product) => {
    return (
      (filters.size.length === 0 || filters.size.includes(product.size)) &&
      (filters.color.length === 0 || filters.color.includes(product.color)) &&
      (filters.material.length === 0 || filters.material.includes(product.material)) &&
      (filters.price.length === 0 || filters.price.includes(`€${product.price}`))
    );
  });

  const visibleProducts = 12;
  const totalPages = Math.ceil(filtredData?.length / visibleProducts);
  const startIndex = (currentPage - 1) * visibleProducts;
  const currentProducts = filtredData?.slice(startIndex, startIndex + visibleProducts);

  const handleUpdateFilters = (name, value) => {
    const params = new URLSearchParams(searchParams);

    if (params.getAll(name).includes(value)) {
      const rest = params.getAll(name).filter((item) => item !== value);

      params.delete(name);

      rest.forEach((item) => params.append(name, item));
    } else {
      params.append(name, value);
    }

    params.delete("page");

    setSearchParams(params);
  };

  const handleRemoveFilter = (filter) => {
    const params = new URLSearchParams();

    searchParams.forEach((value, key) => {
      if (value !== filter) {
        params.append(key, value);
      }
    });

    params.delete("page");
    setSearchParams(params);
  };

  const setCurrentPage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    setSearchParams(params);
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
