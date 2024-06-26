import React from 'react'
import styles from './Style.module.scss'
const Style = () => {
  return (
    <div className={styles.style}>
        <div className={styles.container}>
            <div className={styles.styleImg}>
                <img src="https://cms-live-rc.pandora.net/resource/responsive-image/3082372/m66-feature-module/xs/2/q224-editorial-june-horoscope-product-feature.jpg" alt="style-your-pandora" />
            </div>
            <div className={styles.styleContent}>
                <h3>Style Your Star Sign</h3>
                <p>Symbolize your gentle water sign with Cancer zodiac jewelry that speaks volumes about your authentic self.</p>
                <button>EXPLORE MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Style