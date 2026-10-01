import styles from "./EcoMaterials.module.css";

export default function EcoMaterials() {
  return (
    <div className={styles.eco}>
      <h2 className={styles.title}>We use eco-friendly materials</h2>
      <p className={styles.description}>
        <span>
          We always care about the environment. Therefore we use only environmentally friendly and recyclable materials
          in our production. Our blankets help to warm up on cold evenings, and also make your
        </span>{" "}
        <span>home even more cozy.</span>
      </p>
    </div>
  );
}
