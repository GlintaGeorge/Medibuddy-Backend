import React from 'react'
import Navbar from '../../components/doctor/navbar/navbar'
import Banner from '../../components/doctor/banner'
import Footer from '../../components/doctor/footer/footer'
import Body from '../../components/doctor/body'

const doctorDashboard:React.FC = () => {
  return (
    <>
    <Navbar/> 
    <Banner/>
    <Body/>
    <Footer style={''}/>
    </>
    
  )
}

export default doctorDashboard