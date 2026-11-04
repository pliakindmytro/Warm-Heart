import { useParams } from "react-router-dom";

import Loader from "../Loader/Loader";
import AddToCard from "../AddToCard/AddToCard";

import useFetch from "../../hooks/useFetch";

import styles from "./CardDetails.module.css";

export default function CardDetails() {
  const { id } = useParams();

  const [data, loading, error] = useFetch(`http://localhost:3001/products/${+id}`);

  return (
    <div className={styles.cardDetails}>
      {loading && <Loader />}

      <div className={styles.wrapper}>
        <img src={`/${data?.image}`} alt={data?.name} className={styles.img} />

        <div className={styles.info}>
          <h2 className={styles.name}>{data?.name}</h2>
          <p className={styles.price}>€{data?.price}</p>
          <div className={styles.tabs}>
            <button className={`${styles.tab}`}>Description</button>
            <button className={`${styles.tab} ${styles.active}`}>Details</button>
            <button className={`${styles.tab} ${styles.active}`}>Delivery</button>
          </div>
          <p className={styles.content}>
            Wool is stain resistant. This wear-resistant material perfectly retains heat.Y ou can
            wrap yourself up comfortably lying on the couch or throw it over yourself when it's
            cool.
          </p>
          <div className={styles.characteristics}>
            <p>
              Size: <strong>{data?.size}</strong>
            </p>
            <p>
              Color: <strong>{data?.color}</strong>
            </p>
          </div>
          <AddToCard />
        </div>
      </div>
    </div>
  );
}
