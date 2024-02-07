import React from "react";
import styles from "../../Styles/header.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Header = () => {
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={styles.header_content}>
          <h1 className={styles.header_heading}>Summer Escapades</h1>
          <p className={styles.header_text}>
            Embrace the sun-kissed season with our collection of breezy
          </p>
          <button className={styles.header_button}>
            Shop collection
            <span>
              <ChevronRightIcon />
            </span>
          </button>
        </div>
        <div className={styles.header_img}></div>
      </header>
    </>
  );
};

export default Header;
