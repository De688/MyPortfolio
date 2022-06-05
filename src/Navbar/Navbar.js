import React,{useState} from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { AiFillGithub,AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";

import Hamburger from 'hamburger-react'

function Navbar() {
  const [toggled, setToggled] = useState(false)
  const showmenu=()=>{
    setToggled(!toggled)
  }
  const activebtnstyle=({isActive})=>{
      return {
        
        color: isActive ? 'rgb(184, 248, 211)' : 'rgba(167, 228, 192, 0.685)'
      }
  }
  return (
    <section className='navbarcontainer'>
        <div className='logo'>
          <h3>Christopher Daniel</h3>
        </div>
        <div className={!toggled ?'headerInfo' :'headerInfo-isopen'}>
           <ul>
               <NavLink to='/' style={activebtnstyle} className='navbar-li'>
                   <li>Home</li>
               </NavLink>
               <NavLink to='#Mywork' style={activebtnstyle}  className= 'navbar-li' >
                   <li>My work</li>
               </NavLink>
               <NavLink to='#hireme' style={activebtnstyle}  className='navbar-li'>
                   <li>Hire me</li>
               </NavLink>
           </ul>
        </div>
        <div className='socialmedialogo'>
          <NavLink to='#' className='sociallogo-navlink' activeStyle={{fontSize:'25px', color:'rgb(184, 248, 211)'}}>
              <AiFillGithub className='sociallogo'/>
          </NavLink>
          <NavLink to='#' className='sociallogo-navlink'>
              <AiOutlineInstagram className='sociallogo'/>
          </NavLink>
          <NavLink to='#' className='sociallogo-navlink'>
            <AiOutlineTwitter className='sociallogo'/>
          </NavLink>
        </div>
        <div className='hambager' onClick={showmenu}>
            <Hamburger color='rgb(167, 228, 192)' />
        </div>
    </section>
  )
}

export default Navbar