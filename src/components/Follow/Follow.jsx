import followImage1 from "../../assets/images/follow-section-1.jpg";
import followImage2 from "../../assets/images/follow-section-2.jpg";
import followImage3 from "../../assets/images/follow-section-3.jpg";

import styles from "./Follow.module.css";

export default function Follow() {
  return (
    <div className={styles.follow}>
      <h2 className={`${styles.title} ${styles.instagram}`}>
        <span>Follow us</span> <span>on instagram</span>
      </h2>

      <div className={styles.wrapperInstagram}>
        <img src={followImage1} alt="bedroom" className={styles.followImage1} />
        <img src={followImage2} alt="bed" className={styles.followImage2} />
        <img src={followImage3} alt="heart" className={styles.followImage3} />
        <h3>@warm.heart</h3>
        <p className={styles.descriptionInstagram}>
          <span>
            On our Instagram, we regularly share the most interesting news. We also tell you about
            all our
          </span>{" "}
          <span>new products.</span>
        </p>
      </div>
    </div>
  );
}
