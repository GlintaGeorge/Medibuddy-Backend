import React from 'react'
import Navbar from '../../components/doctor/navbar/navbar'
import DoctorStatusPage from '../../components/doctor/doctorStatusPage'


const DoctorStatus :React.FC = () => {
  return (
    <>
    <Navbar/> 
    <DoctorStatusPage/>
    </>
    
  )
}

export default DoctorStatus;