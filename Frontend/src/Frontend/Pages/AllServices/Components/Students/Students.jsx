import React from 'react'
import styles from './Students.module.scss'
const Students = () => {
  return (
    <div className={styles.students}>
        <div className={styles.container}>
            <div className={styles.studentsHeading}>
                <p>Pandora always puts you first and we want to give you the best shopping experience that is as easy and safe as possible. </p>
            </div>
            <div className={styles.save}>
                <div className={styles.saveContent}>
                    <h1>Students Can Now Save 10%</h1>
                    <p>Pandora offers 10%* off to eligible students via Student Beans and ID.me. Create your perfect jewelry styling today.</p>
                    <button>LEARN MORE</button>
                </div>
                <div className={styles.saveImg}>
                    <img src="https://cms-live-rc.pandora.net/resource/responsive-image/1390912/m66-feature-module-landscape/xs/4/2021-e-wearability-rotation2-model-18-rgb-50-50.jpg" alt="save-now" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Students