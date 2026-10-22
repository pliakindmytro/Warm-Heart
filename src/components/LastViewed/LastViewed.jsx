import LastViewedCard from "../LastViewedCard/LastViewedCard";

import styles from "./LastViewed.module.css";

export default function LastViewed() {
  return (
    <div className={styles.lastViewed}>
      <h2 className={styles.title}>Last viewed</h2>
      <ul className={styles.wrapper}>
        <LastViewedCard />
        <LastViewedCard />
        <LastViewedCard />
        <LastViewedCard />
      </ul>
    </div>
  );
}
