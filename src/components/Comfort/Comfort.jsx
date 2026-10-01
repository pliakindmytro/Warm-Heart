import styles from "./Comfort.module.css";

import Button from "../Button/Button";

import sideneert from "../../assets/images/sideneert.png";

export default function Comfort() {
  return (
    <div className={styles.comfort}>
      <div className={styles.wrapperTitle}>
        <h2 className={styles.title}>
          <span>Create comfort</span> <span>in home</span>
        </h2>
        <p className={styles.text}>
          <span>A blanket is a simple and versatile thing that can make relaxing</span>{" "}
          <span>after a hard day's work much more comfortable.</span>
        </p>
      </div>

      <div className={styles.wrapper}>
        <img src={sideneert} alt="Sideneert" className={styles.img} />

        <div className={styles.description}>
          <h3 className={styles.subtitle}>Sideneert</h3>
          <div className={styles.made}>
            <span>It is made from soft New Zealand wool,</span> <span>which is naturally stain-repellent.</span>
          </div>
          <div className={styles.bedspread}>
            <span>This bedspread is an easy way to freshen up your bedroom decor. Plus, it can be</span>{" "}
            <span>used as an extra blanket if you get cold.</span>
          </div>
          <div className={styles.button}>
            <Button style={{ backgroundColor: "var(--white)", color: "var(--black)" }}>Go to shop</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
