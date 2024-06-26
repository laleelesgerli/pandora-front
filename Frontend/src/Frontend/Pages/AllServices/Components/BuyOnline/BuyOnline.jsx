import React from 'react'
import styles from './BuyOnline.module.scss'
const BuyOnline = () => {
  return (
    <div className={styles.buyOnline}>
        <div className={styles.container}>
            <div className={styles.buyCard}>
                <div className={styles.buyImg}>
                     <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1155754/m52-explore-module-col-2/xs/10/clickandcollect.jpg" alt="buy-online" />
                </div>
                <div className={styles.buyContent}>
                    <h1>Buy Online, Pick Up In-Store</h1>
                    <p>Click "Find in Store" on the product page to see if the item is available for pickup at your local store. </p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyOnline