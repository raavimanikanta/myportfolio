import React, { useContext } from 'react'
import { ImagesDetails } from './ImageContext'

const Languages = () => {
    const{value1}=useContext(ImagesDetails)
    const[Images]=value1
  
  return (
      <>
      <div className='languages-cont'>
          <h2 className='Languages-names'>Languages/Library/Technology</h2>
          <div className='border'></div>
      </div>
      <div className="Languages-images">
          {
              Images.map((result)=>
            <div>
              <div >
                 
              <div className='image1'><img src={result.image1} className="Images-style" width="70px"/></div>
              <div className='image2'><img src={result.image2}className="Images-style1" width="60px"  /></div>
              <div className='image3'><img src={result.image3} className="Images-style2" width="70px" /></div>
              <div className='image4'><img src={result.image4} className="Images-style3" width="80px" /></div>
              <div className='image5'><img src={result.image5} className="Images-style4" width="70px" /></div>
              <div className='image6'><img src={result.image6} className="Images-style5" width="70px" /></div>

              </div>
            </div>
              )
          }

      </div>
      </>
    
  )
}

export default Languages