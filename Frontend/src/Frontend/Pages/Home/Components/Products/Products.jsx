import React from 'react'
import styles from './Products.module.scss'
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate = useNavigate()

    
    const goToBracelets = () => {
        navigate('/bracelets')
    }

    const goToRings = () => {
        navigate('/rings')
    }

    const goToEarrings = () => {
        navigate('/earrings')
    }

    const goToNecklaces = () => {
        navigate('/necklaces')
    }
  return (
    <div className={styles.products}>
        <div className={styles.cards}>
            <img onClick={goToBracelets} src="https://cms-live-rc.pandora.net/resource/responsive-image/3100272/m65-category-module-landscape/xs/1/pngtrpnt-593317c00-v2-rgb.png" alt="bracelets" />
            <p onClick={goToBracelets}>BRACELETS</p>
        </div>
        <div className={styles.cards}>
            <img onClick={goToRings} src="https://cms-live-rc.pandora.net/resource/responsive-image/3097614/m65-category-module-landscape/xs/1/pngtrpnt-163288c00-rgb.png" alt="rings" />
            <p onClick={goToRings}>RINGS</p>
        </div>
        <div className={styles.cards}>
            <img onClick={goToEarrings} src="https://cms-live-rc.pandora.net/resource/responsive-image/3097498/m65-category-module-landscape/xs/2/pngtrpnt-293320c00-rgb.png" alt="earrings" />
            <p onClick={goToEarrings}>EARRINGS</p>
        </div>
        <div className={styles.cards}>
            <img onClick={goToNecklaces} src="https://cms-live-rc.pandora.net/resource/responsive-image/3100274/m65-category-module-landscape/xs/1/pngtrpnt-363272c00-rgb.png" alt="necklaces" />
            <p onClick={goToNecklaces}>NECKLACES</p>
        </div>
    </div>
  )
}

export default Products