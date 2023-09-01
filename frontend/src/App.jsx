import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import MainDescription from './components/MainDescription/MainDescription';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className="content">
        <Hero />
        <MainDescription/>
      </div>
    </div>
  )
}

export default App
