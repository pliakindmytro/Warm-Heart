import styles from "./App.module.css";

import Header from "../Header/Header";
import Comfort from "../Comfort/Comfort";
import EcoMaterials from "../EcoMaterials/EcoMaterials";
import Form from "../Form/Form";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";

import followImage1 from "../../assets/images/follow-section-1.jpg";
import followImage2 from "../../assets/images/follow-section-2.jpg";
import followImage3 from "../../assets/images/follow-section-3.jpg";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <Comfort />
      <EcoMaterials />

      <Section>
        <h2 className={`${styles.title} ${styles.instagram}`}>
          <span>Follow us</span> <span>on instagram</span>
        </h2>

        <div className={styles.wrapperInstagram}>
          <img src={followImage1} alt="bedroom" className={styles.followImage1} />
          <img src={followImage2} alt="bed" className={styles.followImage2} />
          <img src={followImage3} alt="heart" className={styles.followImage3} />
          <h3>@warm.heart</h3>
          <p className={styles.descriptionInstagram}>
            <span>On our Instagram, we regularly share the most interesting news. We also tell you about all our</span>{" "}
            <span>new products.</span>
          </p>
        </div>
      </Section>

      <Section backgroundColor="var(--beige)" direction="row">
        <div className={styles.wrapperDiscount}>
          <h2 className={styles.title}>
            <span>Get 20% off</span> <span>your first purchase</span>
          </h2>
          <p className={styles.descriptionDiscount}>
            Subscribe to our newsletter and get a promo code for a 20% discount! You will receive only the most
            important and relevant news.
          </p>
        </div>

        <Form />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
