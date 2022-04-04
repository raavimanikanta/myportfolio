import React from 'react'
import Resumeimg from "./resume.jpg"

const Resume = () => {
  return (
        <>
         <div className='Resume-main-heading'>Resume</div>
        <div className='Resume-continer'>
       
        <div className='Resume-left-container'>
        <div className='Resume-heading1'>Workshops and Internships:-</div>
        <hr/>
        <div className='Resume-year1'>2019</div>
        <div>
            <p>1.Attended intership in vizag steel plant for two weeks</p>
           
            <p>2.Attended the Rob-cad workshop at jntuk,which was conducted by the college management.</p>
        </div>
        <div className='Resume-heading1'>Accomplishments:-</div>
        <hr/>
        <div className='Resume-year2'>2018</div>
        <h3>Curricular:-</h3>
       
        <div>
            <p>1.participated in techinal fest (STRIDES)which was conduced by the Managemant of Mechanical Branch and as a incharge conducted few activites .</p>
        </div>
        <h3>Extra-curricular:-</h3>
        <div>
          <p>1.completed fundamentals of manufacturing processes with Elite on NPTEL online certification.</p>
        </div>
        <div className='Resume-heading1'>Education:-</div>
        <hr/>
        <div className='Resume-year3'>2017-2021</div>
        <h3>Pragati Enigineering College ,JNTUK University</h3>
        <h4>Mechanical Enigineering</h4>
        <p>Reference site about lorem ipsum giving information on its origin as well as a random lipsum generator</p>

        </div>

        <div>
         <img src={Resumeimg} className="Resume-image" />

         <div className='Fontawesom-icons'>
         <div><i class="fa-brands fa-facebook fa-3x"></i></div>
         <div><i class="fa-brands fa-skype fa-3x"></i></div>
         <div><i class="fa-brands fa-pinterest-p fa-3x"></i></div>
         <div><i class="fa-brands fa-linkedin fa-3x" ></i></div>
         <div><i class="fa-brands fa-instagram fa-3x"></i></div>
         </div>
        </div>
        </div>
        </>
    
  )
}

export default Resume