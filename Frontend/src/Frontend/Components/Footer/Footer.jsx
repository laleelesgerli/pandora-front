import React from 'react'
import styles from './Footer.module.scss'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate()

    const goToAllServices = () => {
        navigate('/services')
    }

    const goToWishlist = () => {
        navigate('/wishlist')
    }

    const goToBasket = () => {
        navigate('/basket')
    }

    const goToUser = () => {
        navigate('/login')
    }

    const goToCharms = () => {
        navigate('/charms')
    }

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

    const goToRegister = () => {
        navigate('/register')
    }

    const goToAboutPandora = () => {
        navigate('/aboutPandora')
    }
    const goToTerms = () => {
        navigate('/terms')
    }

    const goToCookie = () => {
        navigate('/cookie')
    }

    const goToPrivacy = () => {
        navigate('/privacy')
    }

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTop}>
                    <div className={styles.shop}>
                        <ul>
                            <li className={styles.listHeading}>Shop</li>
                            <li><a onClick={goToCharms}>Charms</a></li>
                            <li><a onClick={goToBracelets}>Bracelets</a></li>
                            <li><a onClick={goToRings}>Rings</a></li>
                            <li><a onClick={goToEarrings}>Earrings</a></li>
                            <li><a onClick={goToNecklaces}>Necklaces</a></li>
                        </ul>
                    </div>
                    <div className={styles.shop}>
                        <ul>
                            <li className={styles.listHeading}>Manage</li>
                            <li><a onClick={goToAllServices}>All services & Offerings</a></li>
                            <li><a onClick={goToBasket}>Basket</a></li>
                            <li><a onClick={goToWishlist}>Wishlist</a></li>
                            <li><a onClick={goToRegister}>Register</a></li>
                            <li><a onClick={goToUser}>Login</a></li>
                        </ul>
                    </div>
                    <div className={styles.shop}>
                        <ul>
                            <li className={styles.listHeading}>About Us</li>
                            <li><a onClick={goToAboutPandora}>About Pandora</a></li>
                            <li><a onClick={goToTerms}>Terms and Conditions</a></li>
                            <li><a onClick={goToCookie}>Cookie policy</a></li>
                            <li><a onClick={goToPrivacy}>Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
                    <div className={styles.footerBottom}>
                        <div className={styles.copyright}>
                            <h3>© ALL RIGHTS RESERVED. 2024 Pandora</h3>
                        </div>
                        <div className={styles.socials}>
                            <ul>
                                <li><a href="https://www.facebook.com/PandoraJewelry/"><FaFacebook /></a></li>
                                <li><a href="https://www.instagram.com/theofficialpandora/"><FaInstagramSquare /></a></li>
                                <li><a href="https://twitter.com/pandora_corp?lang=en"><FaTwitterSquare /></a></li>
                                <li><a href="https://www.youtube.com/user/theofficialpandora"><FaYoutube /></a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer