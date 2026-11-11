import { useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import LastViewedCard from "../LastViewedCard/LastViewedCard";

import { useLastViewed } from "../../contexts/LastViewedContext";

import styles from "./LastViewed.module.css";

export default function LastViewed() {
  const { lastViewedCards } = useLastViewed();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const isEmptyData = data.length === 0;

  useEffect(() => {
    async function fetchLastViewed() {
      try {
        setLoading(true);
        const products = await Promise.all(
          lastViewedCards.map((id) =>
            fetch(`http://localhost:3001/products/${id}`).then((res) => {
              if (!res.ok) throw new Error("Product not found");
              return res.json();
            }),
          ),
        );

        setData(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (lastViewedCards.length) {
      fetchLastViewed();
    } else {
      setData([]);
    }
  }, [lastViewedCards]);

  console.log(data);

  return (
    <div className={styles.lastViewed}>
      <h2 className={styles.title}>Last viewed</h2>
      {isEmptyData ? (
        <p style={{ textAlign: "center" }}>Click the card to display last viewed cards</p>
      ) : loading ? (
        <Loader />
      ) : (
        <ul className={styles.wrapper}>
          {data.map((card) => (
            <LastViewedCard card={card} isEmptyData={isEmptyData} key={card.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
