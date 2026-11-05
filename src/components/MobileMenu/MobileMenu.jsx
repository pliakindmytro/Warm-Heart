import { Link } from "react-router-dom";

import styles from "./MobileMenu.module.css";

import NavLinks from "../NavLinks/NavLinks";
import Bag from "../Bag/Bag";

export default function MobileMenu({ onToggleIsOpen }) {
  return (
    <div className={styles.menu} onClick={onToggleIsOpen}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <p className={styles.close} onClick={onToggleIsOpen}>
          &times;
        </p>
        <NavLinks className="mobile" />
        <div className={styles.divider}></div>
        <div className={styles.shopping}>
          <Link to="/login" className={styles.link}>
            Authorization
          </Link>
          <Bag logo={false} classCart="mobileCart" />
        </div>
      </div>
    </div>
  );
}
