import React from "react";
import styles from "../../Styles/home.module.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CategoryCard from "./CategoryCard";
import { CategoryDetails } from "../../Helper/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SectionOne = () => {
  return (
    <section className={`${styles.season_collection}`}>
      <div className={`container_fluid`}>
        <div className={styles.section_heading}>
          <h1>Season Collection</h1>{" "}
          <div>
            <p className={styles.all_categories}>
              View all categories <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
            </p>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerGroup={2}
            spaceBetween={60}
            slidesPerView={6}
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper ${styles.all_cards}`}
            style={{}}
          >
            {CategoryDetails.map((items) => {
              return (
                <SwiperSlide>
                  <CategoryCard
                    image={items.image}
                    category={items.category}
                    items={items.items}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
