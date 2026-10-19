import Button from "../Button/Button";
import PreviewSlider from "../PreviewSlider/PreviewSlider";

import styles from "./Preview.module.css";

export default function Preview() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>
        <div className={styles.fixWidth}>
          <h2 className={styles.title}>
            Soft plaids <br /> for your comfort
          </h2>

          <p className={styles.text}>
            <span>Throw a blanket over your shoulders</span>
            <span>or place it on the arm</span>
            <span>of the sofa,</span>
            <span>
              and the atmosphere <br />
              in the house will be
            </span>
            <span>warmer.</span>
          </p>

          <Button
            style={{ backgroundColor: "var(--black)", color: "var(--white)" }}
            className={styles.previewBtn}
          >
            Shop now
          </Button>
        </div>
      </div>

      <div className={styles.previewSlider}>
        <div className={styles.pos}>
          <PreviewSlider />
        </div>
      </div>
    </div>
  );
}
