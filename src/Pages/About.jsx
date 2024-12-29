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
      {/* <Extrasss/>  */}

      {/* corestrength */}
  <div class="card border-0 " style={{width: "18rem", backgroundColor:'lightyellow'}}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
      <ContactCard/>
    </>
  )
}

export default About