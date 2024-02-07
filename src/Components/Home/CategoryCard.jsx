import React from 'react'
import styles from '../../Styles/home.module.css'

const CategoryCard = (props) => {
  return (
    <div className={styles.category_card}>
        <div className={styles.category_pic} style={{backgroundImage:`url(${props.image})`}}></div>
        <div className={styles.category_details}>
            <h3>{props?.category}</h3>
            <p>{props?.items} items</p>
        </div>
    </div>
  )
}

export default CategoryCard