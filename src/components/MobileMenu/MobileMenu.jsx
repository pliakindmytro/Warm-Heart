import styles from "./MobileMenu.module.css";

import NavLinks from "../NavLinks/NavLinks";
import Input from "../Input/Input";
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
          <Input placeholder="Search" lessHeight={true} />
          <Bag logo={false} classCart="mobileCart" />
        </div>
      </div>
    </div>
  );
}
