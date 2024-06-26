import React from 'react'
import styles from './PandoraCards.module.scss'
const PandoraCards = () => {
  return (
    <div className={styles.pandoraCards}>
        <div className={styles.container}>
            <div className={styles.cards}>
                <div className={styles.cardImg}>
                    <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1166514/m52-explore-module-col-3/xs/2/icon-ppc.jpg" alt="card-image" />
                </div>
                <div className={styles.cardContent}>
                    <h3>Pandora Preferred Card</h3>
                    <p>Save 10% on your first purchase when you open a new account.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.cardImg}>
                    <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1166512/m52-explore-module-col-3/xs/2/icon-afterpay.jpg" alt="card-image" />
                </div>
                <div className={styles.cardContent}>
                    <h3>Afterpay</h3>
                    <p>Sparkle now then pay later. Split your purchase across 4 payments, due every two weeks.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.cardImg}>
                    <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1166510/m52-explore-module-col-3/xs/2/icon-klarna.jpg" alt="card-image" />
                </div>
                <div className={styles.cardContent}>
                    <h3>Klarna.</h3>
                    <p>Shop for the things you love and pay over time. Split your purchase across 4 payments, due every two weeks.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.cardImg}>
                    <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1166208/m52-explore-module-col-3/xs/2/icon-virtueltryon.jpg" alt="card-image" />
                </div>
                <div className={styles.cardContent}>
                    <h3>Virtual Try On</h3>
                    <p>Select the 'Try It On' button from most of our product pages including rings, bracelets & charms to try on our jewelry from anywhere.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.cardImg}>
                    <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1166520/m52-explore-module-col-3/xs/2/icon-idme.jpg" alt="card-image" />
                </div>
                <div className={styles.cardContent}>
                    <h3>ID.me</h3>
                    <p>Pandora is proud to support medical professionals, teachers, military, and first responders. Verify your eligibility with ID.me to receive an exclusive 10% discount.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.cardImg}>
                    <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1387674/m52-explore-module-col-3/xs/1/engraving-services-icon.jpg" alt="card-image" />
                </div>
                <div className={styles.cardContent}>
                    <h3>Custom Engraving Bar</h3>
                    <p>Create the perfect personalized charm for you or your loved one.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PandoraCards