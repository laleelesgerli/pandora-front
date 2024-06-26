import React from 'react'
import styles from './AboutCompany.module.scss'
const AboutCompany = () => {
  return (
    <div className={styles.aboutCompany}>
        <div className={styles.container}>
            <div className={styles.companyHeading}>
                <p>How a Danish jewelry brand designed pieces for women around the world to express their stories through their style.</p>
            </div>
            <div className={styles.companyContent}>
                <div className={styles.companyCard}>
                    <div className={styles.companyImg}>
                        <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1146072/m51-full-width-two-image-module-square/xs/3/medium-spr18-some-milan-f-enlarged-cmyk-copy.jpg" alt="company-image" />
                    </div>
                    <div className={styles.companyDes}>
                        <h2>A charm to tell so many stories</h2>
                        <p>Pandora began designing its beloved charms in the year 2000. Each charm has a meaning, some times many meanings, one from its designer and more lent to it by the person who wears and loves it. Whether it’s a celebration of color or pattern or a tribute to a country, occasion, activity or most importantly, a person, each charm is designed to tell the personal story of its wearer while showcasing their unique style. Our charms are worn with love on bracelets and necklaces; created especially to be worn in ways unique to those who wear them.</p>
                    </div>
                </div>
                <div className={styles.companyImgSecond}>
                    <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1146088/m51-full-width-two-image-module/xs/3/history-of-charms.jpg" alt="charms" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCompany