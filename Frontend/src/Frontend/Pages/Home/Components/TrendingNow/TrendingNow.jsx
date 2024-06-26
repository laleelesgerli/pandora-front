import React from 'react'
import styles from './TrendingNow.module.scss'
import ProductCard from './ProductCard'
const TrendingNow = () => {
  return (
    <div className={styles.trendingNow}>
        <div className={styles.container}>
            <h1>Trending Now</h1>
            <ProductCard />
        </div>
    </div>
  )
}

export default TrendingNow