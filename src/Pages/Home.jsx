import React from 'react'
import Hero from '../Components/Hero'
import Legacy from '../Components/Legacy'
import Services from '../Components/Services'
import Action from '../Components/Action'
import Testimonials from '../Components/Testimonials'
import Casestudy from '../Components/CaseStudy'
import ContactCard from '../Components/ContactCard'
import HomeSvg from '../Components/HomeSvg'

const Homepage = () => {
  return (
    <>
       <Hero/>
        <Legacy/>
        <Services/>
        <Action/>
        <HomeSvg/>
        <Testimonials/>
        <Casestudy/>
        <ContactCard/>
    </>
  )
}

export default Homepage