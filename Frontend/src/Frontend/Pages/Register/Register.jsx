import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import JoinMyPandora from '../Home/Components/JoinMyPandora/JoinMyPandora'
import RegisterContent from './Components/RegisterContent/RegisterContent'

const Register = () => {
  return (
    <div>
        <Header/>
        <RegisterContent/>
        <JoinMyPandora/>
        <Footer/>
    </div>
  )
}

export default Register