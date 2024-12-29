import React from 'react'
import Story from '../Components/Story'
import Mission from '../Components/Mission'
import Testimonials from '../Components/Testimonials'
import ContactCard from '../Components/ContactCard'
import CoreStrength from '../Components/CoreStrength'
import IndustriesWeWork from '../Components/IndustriesWeWork'
import { FaHospital, FaUniversity, FaStore, FaIndustry, FaGamepad, FaOilCan, FaPlane, FaRobot, FaUsers, FaCloud } from 'react-icons/fa';



const About = () => {
  return (
    <>
      <Story />
      <Mission />
      <Testimonials />
      {/* Core Strengths Section */}
      <CoreStrength/>

      {/* Industries we work in Section */}

      
      <IndustriesWeWork/>

      

      <ContactCard />
    </>
  )
}

export default About
