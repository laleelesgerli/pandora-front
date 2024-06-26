import React, { useCallback, useRef, useState } from 'react'
import styles from './Header.module.scss'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiShoppingBagThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
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


    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOpen = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.header}>
            <div className={styles.buyNow}>
                <a href="#">FREE IN-STORE PICKUP Within 2 hours.</a>
            </div>
            <div className={styles.headerMain}>
                <div className={styles.logo}>
                    <h1>PANDORA</h1>
                </div>

                {/* <div className={styles.search}>
                    <input type="text" placeholder='Search' />
                    <div className={styles.searchIcon}>
                        <button><CiSearch /></button>
                    </div>
                </div> */}
                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <CiHeart onClick={goToWishlist} />
                    </div>
                    <div className={styles.icon}>
                        <CiUser onClick={goToUser} />
                    </div>
                    <div className={styles.icon}>
                        <PiShoppingBagThin onClick={goToBasket} />
                    </div>
                </div>
                <div className={styles.hamburger}>
                    <RxHamburgerMenu onClick={handleOpen} />
                </div>
            </div>
            <div className={styles.headerContent}>
                <ul>
                    <li><a onClick={goToCharms}>Charms</a></li>
                    <li><a onClick={goToBracelets}>Bracelets</a></li>
                    <li><a onClick={goToRings}>Rings</a></li>
                    <li><a onClick={goToEarrings}>Earrings</a></li>
                    <li><a onClick={goToNecklaces}>Necklaces</a></li>
                </ul>
            </div>
            <div className={styles.dropdown} onBlur={handleClose} ref={dropdownRef}>
                {open ? (
                    <ul className={styles.menu}>
                        <li><a onClick={goToCharms}>Charms</a></li>
                        <li><a onClick={goToBracelets}>Bracelets</a></li>
                        <li><a onClick={goToRings}>Rings</a></li>
                        <li><a onClick={goToEarrings}>Earrings</a></li>
                        <li><a onClick={goToNecklaces}>Necklaces</a></li>
                        <li className={styles.icons}>
                            <ul>
                                <li><a onClick={goToWishlist}><CiHeart /></a></li>
                                <li><a onClick={goToUser}><CiUser /></a></li>
                                <li><a onClick={goToBasket}><PiShoppingBagThin /></a></li>
                            </ul>
                        </li>
                        {/* <li className={styles.search}>
                            <input type="text" placeholder='Search' />
                            <div className={styles.searchIcon}>
                                <button><CiSearch /></button>
                            </div>
                        </li> */}
                    </ul>
                ) : null}
            </div>
        </div>
    )
}

export default Header