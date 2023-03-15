import React from 'react'
import Home from './Pages/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Laptops from './components/Laptops'
import Mobiles from './components/Mobiles'
import Contact from './components/Contact'
import Buy from './components/Buy'
import Repair from './components/Repair'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Laptops" element={<Laptops/>}></Route>
        <Route path="/Mobiles" element={<Mobiles/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Buy" element={<Buy/>}></Route>
        <Route path="/Repair" element={<Repair/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App