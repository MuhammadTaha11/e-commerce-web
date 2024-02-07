import React from "react";
import styles from "../../Styles/header.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { RiShoppingBag2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
    <nav >
      <div className={`container_fluid ${styles.top_bar}`}>
        <div className={styles.flag_language_selector}>
          <div className={styles.flag_selector}>
            <div className={styles.flag_image} />
            USD <KeyboardArrowDownIcon />
          </div>
          <div className={styles.language_selector}>
            English <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className={styles.top_logo}></div>
        <div className={styles.icons_group}>
          <SearchIcon className={styles.icon} sx={{ fontSize: "28px" }} />
          <PersonOutlineIcon
            className={styles.icon}
            sx={{ fontSize: "28px" }}
          />
          <FavoriteBorderIcon
            className={styles.icon}
            sx={{ fontSize: "28px" }}
          />
          <RiShoppingBag2Line className={styles.icon} />
        </div>
      </div>
    <div className={styles.line_div} />
    <ul className={styles.nav_list}>
      <li>Home</li>
      <li>Shop</li>
      <li>Products</li>
      <li>Pages</li>
      <li>Blog</li>
      <li>Buy Now</li>
    </ul>
    </nav>
    </>
  );
};

export default Navbar;
