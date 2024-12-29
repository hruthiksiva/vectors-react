import React from 'react'
import Story from '../Components/Story'
import Mission from '../Components/Mission'
import Testimonials from '../Components/Testimonials'
import ContactCard from '../Components/ContactCard'
import CoreStrength from '../Components/CoreStrength'



const About = () => {
  return (
    <>
      <Story />
      <Mission />
      <Testimonials />
      {/* Core Strengths Section */}
      <CoreStrength/>
      <ContactCard />
    </>
  )
}

export default About
