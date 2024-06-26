import React from 'react'
import styles from './SpecialMoment.module.scss'
const SpecialMoment = () => {
    return (
        <div className={styles.specialMoment}>
            <div className={styles.container}>
                <div className={styles.specialMomentHeading}>
                    <h1>For every special moment</h1>
                </div>
                <div className={styles.moments}>
                    <div className={styles.momentCards}>
                        <div className={styles.text}>
                            <p>SUMMER CHARMS</p>
                        </div>
                    </div>
                    <div className={styles.momentCardsTwo}>
                        <div className={styles.text}>
                            <p>LAB-GROWN DIAMONDS</p>
                        </div>
                    </div>
                    <div className={styles.momentCardsThree}>
                        <div className={styles.text}>
                            <p>TENNIS BRACELETS</p>
                        </div>
                    </div>
                    <div className={styles.momentCardsFour}>
                        <div className={styles.text}>
                            <p>HEART & PROMISE RINGS</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SpecialMoment