import React, { useContext } from 'react'
import { ImagesDetails } from './ImageContext'

const Myportfolio = () => {
  const{value2}=useContext(ImagesDetails)
  const[Projects]=value2;
  
  return (
      <>
      <div className='Projects-lists-container'>
        <div className='Projects-lists-header'>My-Portfolio</div>
        <div className='Projects-Lists'>
          {
            Projects.filter((x)=>(x.id===1)).map((y)=>
              
              <div  className='Projects-Details' style={{backgroundImage:`url(${y.image})`,backgroundSize:"cover"}} >
                <div className='Projects-Style' >{y.Name}</div>
              <a href={y.project1} ><button className='projects-btn'>Project-Details</button></a>
              </div>
              
              )
          }
          {
            Projects.filter((x)=>(x.id===2)).map((y)=>
               
              
              <div className='Projects-Details' style={{backgroundImage:`url(${y.image})`,backgroundSize:"cover"}}>
                <div className='Projects-Style' >{y.Name}</div>
                <a href={y.project2} ><button className='projects-btn'>Project-Details</button></a>
                </div>
              
              )
          }
          {
            Projects.filter((x)=>(x.id===3)).map((y)=>
              
              <div className='Projects-Details' style={{backgroundImage:`url(${y.image})`,backgroundSize:"cover"}}>
                <div className='Projects-Style' >{y.Name}</div>
              <a href={y.project3} ><button className='projects-btn' >Project-Details</button></a>
              </div>
              
              ) 
          }
          {
            Projects.filter((x)=>(x.id===4)).map((y)=>
              
              <div className='Projects-Details'  style={{backgroundImage:`url(${y.image})`,backgroundSize:"cover"}}>
                <div className='Projects-Style'>{y.Name}</div>
                <a href={y.project4} ><button className='projects-btn'>Project-Details</button></a>
                </div>
              
              )
          }
          {
            Projects.filter((x)=>(x.id===5)).map((y)=>
              
              <div className='Projects-Details'  style={{backgroundImage:`url(${y.image})`,backgroundSize:"cover"}}>
                <div className='Projects-Style'>{y.Name}</div>
                <a href={y.project5} ><button className='projects-btn'>Project-Details</button></a>
                </div>
              
              )
          }
          
        
        </div>
        </div>
      </>
  
  )
}

export default Myportfolio