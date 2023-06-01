import { useState } from 'react'

import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <div >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div >
  )
}

export default App
