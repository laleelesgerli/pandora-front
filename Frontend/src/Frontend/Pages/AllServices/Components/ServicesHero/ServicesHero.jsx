import React from 'react'
import styles from './ServicesHero.module.scss'
const ServicesHero = () => {
  return (
    <div className={styles.servicesHero}>
        <div className={styles.container}>
            <div className={styles.serviceContent}>
                <h4>MAKING IT EASIER TO SHOP</h4>
                <h1>SERVICES & OFFERINGS</h1>
            </div>
            <div className={styles.servicesImg}>
                <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1155774/m37-hybrid-plp-hero-module/xs/8/image-heart.jpg" alt="services-image" />
            </div>
        </div>
    </div>
  )
}

export default ServicesHero