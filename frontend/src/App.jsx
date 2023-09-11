import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainDescription from './components/MainDescription/MainDescription';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div 
      className="content">
        <Hero/>
        <MainDescription/>
        <Projects/>
      </div>
    </div>
  )
}

export default App
