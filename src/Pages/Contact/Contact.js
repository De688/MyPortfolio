import React, { useState,useEffect,useRef } from 'react'
import './Contact.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { FcCellPhone,FcFeedback } from 'react-icons/fc';
import { SiFiverr,SiUpwork } from 'react-icons/si';
import Emailjs from 'emailjs-com'
import {Link} from 'react-router-dom'


function Contact() {
  const [messagesent, setmessagesent] = useState(false)
  const [Error, setError] = useState(false)
  const form = useRef()
  const submitMessage=(e)=>{
      e.preventDefault()
//sending email using Emailjs
      Emailjs.sendForm('service_84djbgb','template_rjy9kik',form.current,'gFkJt-KVh-Ytbng-z')
      .then((result) => {
        console.log(result.text);
        setmessagesent(true)
    }, (error) => {
        console.log(error.text);
        setError('True')
    });
  }
  useEffect(() => {
    const Timeout = setTimeout(()=>{
      setmessagesent(false)
    },3000)
  },[])
  
  return (
    <section className='contactmaincontainer' id='contact'>
        <div className='contactwrapper'>
          <div className='header'>
            <h1>Contact Me</h1>
          </div>
          <div className='formandemail'>
            <form ref={form} className='contactform'>
              <label typeof='text'>Name</label><br/>
              <input name='name' className='contactform1' type='text'/><br/>
              <label typeof='text'>Email</label><br/>
              <input name='email'  className='contactform1' type='text'/><br/>
              <label  typeof='text'>Message</label><br/>
              <textarea name='message' maxLength='100' rows="10" className='contactform2' type='text'/><br/>
              {messagesent ? <div className='messagesentalam'>messsage sent successfullt !, Thank you, i will reply back to you as soon as i receive this message!</div> :<></>}
              {Error ? <div className='danger'>failed! , this might be caused by network issues!</div> :<></>}

              <button type='submit' className='formbtn' onClick={submitMessage}>Send Message</button>
            </form>
            <div className='numberandemail'>
               <div className='numberandemailwrapper'>
                 <FcFeedback className='phonelogo'/><div className='phonelogotext'><span>My email:</span>Dedaniel688@gmail.com</div>
                
               </div>
               <div className='numberandemailwrapper'>
                
                 <FcCellPhone className='phonelogo'/><div className='phonelogotext'><span>Phone number:</span>+255783751907</div>
               </div>
               <div className='logowraper'>
                <Link to='https://www.linkedin.com/in/christopher-daniel-46055820a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3DlrBPvSSruq7YvmCOZpmg%3D%3D'>
                <div className='logowraper2'><AiFillLinkedin className='logowraper1'/><h3>Linked In</h3></div>

                </Link>
                <Link to=''>
                <div className='logowraper3'><SiFiverr className='logowraper1'/><h3>Fiverr</h3></div>

                </Link>
                <Link to=''>
                <div className='logowraper4'><SiUpwork className='logowraper1'/><h3>Upwork</h3></div>

                </Link>
                 
                 
               </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact