import React from 'react'
import styles from './JoinMyPandora.module.scss'
import { useNavigate } from 'react-router-dom'
const JoinMyPandora = () => {

    const navigate = useNavigate()

    const goToRegister = () =>{
        navigate('/register')
    }

  return (
    <div className={styles.joinMyPandora}>
        <div className={styles.container}>
            <div className={styles.register}>
                <p> Register <img src="https://us.pandora.net/on/demandware.static/-/Sites-en-US-Library/default/dw7a170628/images/loyalty/images/myPandora.svg" alt="my-pandora"/></p>
                <p>Join our rewards program today to earn points, get personal offers and enjoy exclusive benefits.</p>
            </div>
            <div className={styles.registerBtn}>
                <button onClick={goToRegister}>REGISTER NOW</button>
            </div>
        </div>
    </div>
  )
}

export default JoinMyPandora