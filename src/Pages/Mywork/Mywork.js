import React from 'react'
import {NavLink} from 'react-router-dom'
import movieapp from '../../../src/movieapp.PNG'
import  CardData  from './MyworkData'
import './Mywork.css'



function Mywork() {
  return (
    <section id='Mywork' className='myworkmaincontainer'>
      <div className='myworkwrapper'>
          <div className='header2'>
            <h1 className='myworkline'>My Projects</h1>
          </div>
          <div className='allmyworkwrapper'>
          {CardData.map((data, index)=>{
            const {Title,Image,Technologies,Description,Links} = data
            return( <div className='myworkcard' key={index}>
                   <div className='cardandtext'>
                        <img src={Image} alt='image' className='cardImage'/>
                        <div className='projectName'>{Title}</div>
                    </div>
                  
                    
              <div className='cardbottomdata'>
              <div className='techused' >
                      <ul>
                      <li>{Technologies.reactjs}</li>
                        <li>{Technologies.html}</li>
                        <li>{Technologies.css}</li>
                        <li>{Technologies.api}</li>
                      </ul>
                   </div>
           
                   
                   <div className='projdescription'>
                        {Description}
                   </div>
                   <div className='projvisit'>
                       <NavLink to={Links.visit} className='linkbtn2'>VISIT</NavLink>
                       <NavLink to={Links.images}  className='linkbtn2'>PROJECT IMAGES</NavLink>
                   </div>
                </div>
            </div>)
          })}
               
            </div>
      </div>
    </section>
  )
}

export default Mywork