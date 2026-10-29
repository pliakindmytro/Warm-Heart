import ContactsBlock from "../ContactsBlock/ContactsBlock";

import map from "../../assets/images/map.jpg";

import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>Contacts</h2>

      <div className={styles.wrapper}>
        <img src={map} alt="map" className={styles.img} />

        <div className={styles.blocks}>
          <ContactsBlock
            title="WARM HEART SHOP"
            phoneNumber="+44 330 321 8754"
            address="2A Craven Street, Northampton"
            email="warmheart.shop@gmail.com"
          />

          <ContactsBlock
            title="WARM HEART OFFICE"
            phoneNumber="+44 330 456 1425"
            address="70 Edith Street, Northampton"
            email="warmheart.office@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}
