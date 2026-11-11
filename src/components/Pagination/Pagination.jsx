import Arrow from "../ArrowsNavigate/Arrow";
import NumButton from "../NumButton/NumButton";

import styles from "./Pagination.module.css";

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const handleScrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageChange = (i) => {
    setCurrentPage(i + 1);
    handleScrollTo();
  };

  const handleNextPage = () => {
    if (currentPage === totalPages) return;

    handleScrollTo();
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) return;

    handleScrollTo();
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.wrapper}>
      <Arrow onClick={handlePrevPage} className={styles.left} />

      <div className={styles.numButtons}>
        {Array.from({ length: totalPages }, (_, i) => (
          <NumButton
            key={i}
            num={i + 1}
            active={currentPage === i + 1}
            onClick={() => handlePageChange(i)}
          />
        ))}
      </div>

      <Arrow onClick={handleNextPage} className={styles.right} />
    </div>
  );
}
