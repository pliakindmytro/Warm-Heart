import { useEffect, useState } from "react";

import styles from "./FooterSection.module.css";

export default function FooterSection({ title, expanded = false, children }) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 768px)").matches);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleIsExpanded = () => {
    if (isDesktop) return;

    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.section}>
      <div className={styles.wrapper} onClick={handleToggleIsExpanded}>
        <h4 className={styles.title}>{title}</h4>
        <span className={isExpanded ? styles.active : null}>
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L7 10L13 4" stroke="#FDFBF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {(isExpanded || isDesktop) && <div className={styles.links}>{children}</div>}
    </div>
  );
}
