import React from 'react'
import Story from '../Components/Story'
import Mission from '../Components/Mission'
import Extrasss from '../Components/Vision'
import Testimonials from '../Components/Testimonials'
import ContactCard from '../Components/ContactCard'

const About = () => {
  return (
    <>
      <Story/>
      <Mission/>
        <Testimonials/>
      <Extrasss/> 
      <ContactCard/>
    </>
  )
}

export default About