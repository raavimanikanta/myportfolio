import React, { useContext } from 'react'
import { ImagesDetails } from './ImageContext'

const People = () => {
    const{value3}=useContext(ImagesDetails);
    const[peoples]=value3
  return (
    <div>
        <div className='People-heading'>What people say about me</div>
        <div className='Peoples-main-container'>
           {
               peoples.map((data)=>
               
                <div className='Peoples-container'>
                <div>
                    <img src={data.image1} className="Peoples-images"/>
                </div>
                <div className='people-name'>
                    {data.name}
                </div>
                <div className='peoples-description'>
                    {data.info}
                </div>
                <div className='peoples-description' >
                    {data.description}
                </div>
                </div>
                
               )
           }
           
        </div>
        <div className='peoples-Footer'><span>View for More Testimonals</span><i class="fa-solid fa-arrow-right fa-2x"  ></i></div>
    </div>
  )
}

export default People