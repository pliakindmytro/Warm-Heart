import styles from "./SocialLink.module.css";

export default function SocialLink({ children }) {
  return (
    <a href="#" className={styles.socialLink}>
      {children}
    </a>
  );
}
