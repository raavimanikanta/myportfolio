import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='Contact-main-container'>
    <div><h1 className='contact-header'>Contact Me</h1></div>
    <div className='Contact-container'>
      <div className='Contact-details contact-design'>
          <div><h1 className='contact-headings'>Lets Connect</h1></div>
          <div className='contact-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil tenetur exercitationem quasi beatae quis aspernatur 
              aut, excepturi ullam, id magnam voluptate nam quaerat 
              itaque praesentium ipsam porro! Dicta similique deserunt eum hic! Dignissimos, suscipit facilis.
          </div>
          <div><h3><i class="fa-solid fa-envelope fa-2x"></i><span> raavimani123@gmail.com</span></h3></div>
          <div><h3><i class="fa-solid fa-phone-flip fa-2x"></i><span>9603605926</span></h3></div>
          <div><h3><i class="fa-solid fa-location-dot fa-2x"></i><span>Hyderabad</span></h3></div>
      </div>
      <div className='Form-details contact-design'>
          <div><h1 className='contact-headings'>Send me a Message</h1></div>
          <form>
              <label className='Label-design'>First&Lastname:</label><br/>
              <input type="text" placeholder='NAME' className='input-value'/><br/>
              <label  className='Label-design'>PhoneNumber:</label><br/>
              <input type="Number" placeholder='PHONENUMBER' className='input-value'/><br/>
              <label  className='Label-design'>Emailaddress:</label><br/>
              <input type="email" placeholder='EMAIL' className='input-value'/><br/>
              <label  className='Label-design'>Message:</label><br/>
              <textarea placeholder='Textarea'></textarea><br/>
              <button className='Contact-btn'>Submit</button>
          </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact