import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import BasketElements from './Components/BasketElements/BasketElements'

const Basket = () => {
  return (
    <div>
        <Header/>
        <BasketElements/>
        <Footer/>
    </div>
  )
}

export default Basket