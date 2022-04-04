import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './Components/About';
import Introduction from './Components/Introduction';
import Languages from './Components/Languages';
import Navbar from './Components/Navbar';
import ImageContext from './Components/ImageContext';
import Myportfolio from './Components/Myportfolio';
import Resume from './Components/Resume';
// import People from './Components/People';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <ImageContext>
    
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/Home" element={<Home/>}/> 
          <Route path="/About" element={<About/>}/>
          <Route path="/Myportfolio" element={<Myportfolio/>}/>
          <Route path="/Resume" element={<Resume/>}/> 
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
     
     
     </ImageContext>
    </div>
  );
}

export default App;
