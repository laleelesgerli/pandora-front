import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ServicesHero from './Components/ServicesHero/ServicesHero'
import Students from './Components/Students/Students'
import BuyOnline from './Components/BuyOnline/BuyOnline'
import PandoraCards from './Components/PandoraCards/PandoraCards'

const AllServices = () => {
  return (
    <div>
        <Header/>
           <ServicesHero/>
           <Students/>
           <BuyOnline/>
           <PandoraCards/>
        <Footer/>
    </div>
  )
}

export default AllServices