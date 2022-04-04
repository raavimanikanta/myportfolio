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
             <Link to="/Home"><li>Home</li></Link>
             <Link to="/About"><li>About</li></Link>
             <Link to="/Myportfolio"><li>Portfolio</li></Link>
             <Link to="/Resume"><li>Resume</li></Link>
             <Link to="/Contact"><li>Contact</li></Link>
            </ul>
        </nav>
    </div>
    </>
  ) 
}

export default Navbar