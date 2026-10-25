import styles from "./ContactsBlock.module.css";

export default function ContactsBlock({ title, phoneNumber, address, email }) {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p>
            Phone number: <strong>{phoneNumber}</strong>
          </p>
        </div>

        <div className={styles.text}>
          <p>
            Address: <strong>{address}</strong>
          </p>
        </div>

        <div className={styles.text}>
          <p>
            Email: <strong>{email}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
