import styles from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={styles.filters}>
      <div className={styles.wrapper}>
        <div className={styles.choice}>
          <p className={styles.text}>Filter</p>
          <p className={styles.icon}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.334 8.16666H12.834"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#2C2C2C"
              />
              <path
                d="M16.334 19.8333H5.83398"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#2C2C2C"
              />
              <path
                d="M23.334 19.8333C23.334 21.7663 21.767 23.3333 19.834 23.3333C17.901 23.3333 16.334 21.7663 16.334 19.8333C16.334 17.9003 17.901 16.3333 19.834 16.3333C21.767 16.3333 23.334 17.9003 23.334 19.8333Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#2C2C2C"
              />
              <path
                d="M11.666 8.16666C11.666 10.0997 10.099 11.6667 8.16602 11.6667C6.23302 11.6667 4.66602 10.0997 4.66602 8.16666C4.66602 6.23366 6.23302 4.66666 8.16602 4.66666C10.099 4.66666 11.666 6.23366 11.666 8.16666Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#2C2C2C"
              />
            </svg>
          </p>

          <select className={styles.select}>
            <option value="">Size</option>
            <option value="">110x170</option>
            <option value="">120x180</option>
            <option value="">130x170</option>
            <option value="">150x200</option>
          </select>

          <select className={styles.select}>
            <option value="">Color</option>
            <option value="">#</option>
            <option value="">#</option>
            <option value="">#</option>
            <option value="">#</option>
          </select>

          <select className={styles.select}>
            <option value="">Material</option>
            <option value="">#</option>
            <option value="">#</option>
            <option value="">#</option>
            <option value="">#</option>
          </select>

          <select className={styles.select}>
            <option value="">Price</option>
            <option value="">€85</option>
            <option value="">€90</option>
            <option value="">€95</option>
            <option value="">€135</option>
            <option value="">€140</option>
            <option value="">€150</option>
            <option value="">€170</option>
          </select>
        </div>

        <div className={styles.products}>100 products</div>
      </div>
    </div>
  );
}
