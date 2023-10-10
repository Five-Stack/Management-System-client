import React from 'react'
import Header from '../Components/SharedComponents/Header/Header'
import Footer from '../Components/SharedComponents/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
      <Header />
      <div className='min-h-[calc(100vh-140px)]'>
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  )
}

export default MainPage
