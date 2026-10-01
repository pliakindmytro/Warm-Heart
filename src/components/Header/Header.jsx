import { useState } from "react";

import styles from "./Header.module.css";

import MobileMenu from "../MobileMenu/MobileMenu";
import Purchases from "../Purchases/Purchases";
import Burger from "../Burger/Burger";
import NavLinks from "../NavLinks/NavLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Burger onToggleIsOpen={handleToggleIsOpen} />
      <NavLinks className="navigation" />

      {isOpen && <MobileMenu onToggleIsOpen={handleToggleIsOpen} />}

      <h2>
        <span className={styles.shortTitle}>WH</span>
        <span className={styles.fullTitle}>WARM HEART</span>
      </h2>

      <Purchases />
    </header>
  );
}
