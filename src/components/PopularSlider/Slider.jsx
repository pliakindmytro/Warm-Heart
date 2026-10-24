import { useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Slider.module.css";

export default function Slider({ products, initialSlide }) {
  const swiperRef = useRef(null);

  return (
    <section className={styles.section}>
      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        initialSlide={initialSlide}
        loop={true}
        pagination={{ clickable: true }}
        className={styles.popular}
      >
        {products.map((product) => (
          <SwiperSlide className={styles.slide}>
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <img src={product.image} alt={product.name} className={styles.img} />
              </div>
              <div className={styles.description}>
                <p className={styles.name}>{product.name}</p>
                <div className={styles.descriptionWrapper}>
                  <p>{product.size}</p>
                  <p>€{product.price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navigation}>
        <button className={styles.left} onClick={() => swiperRef.current?.slidePrev()}>
          <svg
            width="30"
            height="20"
            viewBox="0 0 33 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5 11.5H1.5M12.5 21.5L1.5 11.5L12.5 1.5"
              stroke="#2C2C2C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className={styles.right} onClick={() => swiperRef.current?.slideNext()}>
          <svg
            width="30"
            height="20"
            viewBox="0 0 33 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 11.5H31.5M20.5 21.5L31.5 11.5L20.5 1.5"
              stroke="#2C2C2C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
