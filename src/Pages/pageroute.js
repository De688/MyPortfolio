import React from 'react'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Mywork from './Mywork/Mywork'
import Technologies from './Technologies/Technologies'

function Pageroute() {
  return (
    <>
      <Home/>
      <Technologies/>
      <Mywork/>
      <Contact/>
    </>
  )
}

export default Pageroute