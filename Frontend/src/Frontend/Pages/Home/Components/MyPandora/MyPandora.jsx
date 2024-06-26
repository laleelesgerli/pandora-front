import React from 'react'
import styles from './MyPandora.module.scss'
import { FaHeart } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaRegCreditCard } from "react-icons/fa";

const MyPandora = () => {
  return (
    <div className={styles.myPandora}>
        <div className={styles.container}>
            <div className={styles.cards}>
                <div className={styles.card}>
                <FaHeart className={styles.icon}/>
                    <h6>My Pandora</h6>
                    <p> Join today to earn points with your purchases and enjoy exclusive benefits. You're going to love it!</p>
                </div>
                <div className={styles.card}>
                <FaPencilAlt className={styles.icon}/>
                    <h6>In-Store & Online</h6>
                    <p>  Students save 10% with ID.me & Student Beans.</p>
                </div>
                <div className={styles.card}>
                <VscVerifiedFilled className={styles.icon}/>
                    <h6>Military & Veterans, First Responders, Teachers, Students, Nurses, Medical Providers and Hospital Employees</h6>
                    <p> Get verified with ID.me and save 10% online & in-store.</p>
                </div>
                <div className={styles.card}>
                <FaRegCreditCard className={styles.icon}/>
                    <h6>Pandora Credit Card</h6>
                    <p> Give yourself the credit you deserve. Special financing offers available.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPandora