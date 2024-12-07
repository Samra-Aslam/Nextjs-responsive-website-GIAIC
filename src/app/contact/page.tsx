import React from 'react'

const Contact = () => {
 
  return (
    <div className='Contact'>
      <div className='main'>
      <form>
      <h3>Contact Us</h3>
      <fieldset>
      <p>Name:</p>
      <input type='text' placeholder='Your Name...' required/>
      <p>Email:</p>
      <input type='email' placeholder='Your Name...' required/>
      <p>Message:</p>
      <textarea  rows={5} placeholder='Your message here ........'/>
      <button className='btnsend'>Send</button>

      </fieldset>
       
        </form>
      </div>
    </div>
  )
}

export default Contact;