import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Tables from '../components/Tables'

const Home = () => {
  return (
    <React.Fragment>
        <Header />
        <Hero />
        <Tables />
        <Footer />
    </React.Fragment>
  )
}

export default Home