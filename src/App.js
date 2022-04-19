import React from 'react'
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Messages from './pages/Messages'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/aboutUs'element={<AboutUs/>}/>
      <Route path='/contactUs'element={<ContactUs/>}/>
      <Route path='/messages'element={<Messages/>}/>

    </Routes>
   
    </>
  )
}

export default App