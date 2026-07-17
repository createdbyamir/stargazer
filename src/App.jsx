import { useState } from 'react'
import Nasa from './Nasa'
import logo from './assets/logo.png'

function App() {

  return (
    <>
      <img src={logo} alt="logo" className="h-[50ox] w-[50px]"/>
      <Nasa />
    </>
  )
}

export default App
