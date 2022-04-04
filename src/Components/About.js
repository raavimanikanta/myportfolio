import React from 'react'
import Aboutimg from "./about.jpg"
import Languages from './Languages'

const About = () => {
  return (
      <>
      <div className='About-container'>
          <div className='About-image'>
              <img src={Aboutimg} />
          </div>
          <div className='About-right'>
              <h1 className='About-style'>About Me</h1>
          <div >
              <p>
              I'm a web designer & front end developer. I'm interested in all 
              kinds of visual communication,but my major focus is an designing web,
              mobile &tablet interfaces .I also have skillls in either fields 
              like branding,icon design (or) web development.
              </p>
              <p>
              I enjoy turning complex problems into simple ,beautiful and 
              intuitive designs.When I'm not pushing pixels ,you'll find 
              me cooking, gardening (or) working out in the park.
              </p>
          </div>
          <Languages/>

      </div>
      </div>
      </>
    
  )
}

export default About