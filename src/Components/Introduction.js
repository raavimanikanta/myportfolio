import React from 'react'
import Reactimg from './Intro.jpg'

const Introduction = () => {
  return (
    <>
    <div className='intro-cont'>
        <div className='intro-details'>
        <div><h1 className='intro-style1'>Hi,iam</h1></div>
        <div><h1 className='intro-style1'>Raavi Naga Veera Manikanta</h1></div>
        <div><h2 className='intro-style'>A Front-End Developer</h2></div>
        <h3 className='intro-style'>Get ready to turn ideas into reality</h3>
        <div>
            <button className='Hire-btn btn'>Hire Me</button>
            <button className='Resume-btn btn'>Get Resume</button>
        </div>
        </div>
        <div>
        <img src={Reactimg}  className='intro-image'/>
        </div>
    </div>
    </>
  )
}

export default Introduction