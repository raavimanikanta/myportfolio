import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='header'>
        <nav className='Nav-design'>
            <div className='Logo'>
                <h1>Raavi Naga Veera Manikanta</h1>
            </div>
            <ul className='Full-Details'>
              
              <Link className='text-class'  to="/Home">Home</Link>
            
             
              <Link className='text-class' to="/About">About</Link>
            
              
              <Link  className='text-class'  to="/Myportfolio">Portfolio</Link>
            
              
                <Link className='text-class'   to="/Resume">Resume</Link>
      
                
                <Link className='text-class'  to="/Contact">Contact</Link>
      
                
             
          
            
             
             
            </ul>
        </nav>
    </div>
    </>
  ) 
}

export default Navbar