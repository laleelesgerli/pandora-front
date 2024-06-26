import React from 'react'
import Header from '../../Components/Header/Header'
import HeroSec from './Components/HeroSec/HeroSec'
import Products from './Components/Products/Products'
import SpecialMoment from './Components/SpecialMoment/SpecialMoment'
import Style from './Components/Style/Style'
import MyPandora from './Components/MyPandora/MyPandora'
import JoinMyPandora from './Components/JoinMyPandora/JoinMyPandora'
import Footer from '../../Components/Footer/Footer'
import TrendingNow from './Components/TrendingNow/TrendingNow'

const Home = () => {
  return (
    <div>
        <Header/>
        <HeroSec/>
        <Products/>
        <TrendingNow/>
        <SpecialMoment/>
        <Style/>
        <MyPandora/>
        <JoinMyPandora/>
        <Footer/>
    </div>
  )
}

export default Home