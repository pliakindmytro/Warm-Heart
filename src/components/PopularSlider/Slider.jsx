import { useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Arrow from "../ArrowsNavigate/Arrow";

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
            <Link to={`/shop/${product.id}`}>
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
            </Link>
          </SwiperSlide>
        ))}
        <Arrow onClick={() => swiperRef.current?.slidePrev()} className={styles.left} />
        <Arrow onClick={() => swiperRef.current?.slideNext()} className={styles.right} />
      </Swiper>
    </section>
  );
}
