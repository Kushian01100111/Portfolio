import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainDescription from './components/MainDescription/MainDescription';
import Projects from './components/Projects/Projects';
import { gif } from './assets/imgs/Gifs';
import './App.css';

function App() {
  const { t } = useTranslation()

  return (
    <div className='App'>
      <Navbar />
      <div 
      className="content">
        <Hero/>
        <MainDescription/>
        <div className='projects'>
          <Projects
            name={t("billy.title")}
            keywords={t("billy.description")}
            technologies={t("billy.tech", { returnObjects: true })}
            client={t("billy.client")}
            github={t("billy.github")}
            link={t("billy.site")}
            side={"left"}
            gif={gif[0]}/>
          <Projects gif={gif[1]}/>
          <Projects/>
          <Projects/>
        </div>
      </div>
    </div>
  )
}

export default App
