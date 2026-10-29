import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { previewProducts } from "../../data/previewProducts";

import styles from "./PreviewSlider.module.css";

export default function PreviewSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      initialSlide={2}
      breakpoints={{
        768: {
          direction: "vertical",
        },
      }}
      loop={true}
      pagination={{ clickable: true }}
      className={styles.preview}
    >
      {previewProducts.map((product) => (
        <SwiperSlide className={styles.slide}>
          <Link to="/shop/7" className={styles.link}>
            <img src={product.image} alt={product.image} />
          </Link>
          <svg
            width="111"
            height="111"
            viewBox="0 0 111 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrowTop}
          >
            <path
              d="M109.5 1.52412C73.5 0.690979 1.5 21.1197 1.5 109.5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#2C2C2C"
            />
          </svg>

          <svg
            width="111"
            height="111"
            viewBox="0 0 111 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrowBottom}
          >
            <path
              d="M109.5 1.52412C73.5 0.690979 1.5 21.1197 1.5 109.5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#f7ede4"
            />
          </svg>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
