import React from 'react'
import Introduction from './Introduction'
import About from './About'
import Myportfolio from './Myportfolio'
import Resume from './Resume'
import People from './People'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Introduction/>
        <About/>
        <Myportfolio/>
        <Resume/>
        <People/>
        <Contact/>
    </div>
  )
}

export default Home