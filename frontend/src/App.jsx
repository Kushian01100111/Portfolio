import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainDescription from './components/MainDescription/MainDescription';
import Projects from './components/Projects/Projects';
import Form from './components/Form/Form';
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
            text={t("billy.technology")}
            client={t("billy.client")}
            github={t("billy.github")}
            link={t("billy.site")}
            side={"right"}
            gif={gif[0]}/>
          <Projects
            name={t("frenzy.title")}
            keywords={t("frenzy.description")}
            technologies={t("frenzy.tech", { returnObjects: true })}
            text={t("frenzy.technology")}
            client={t("frenzy.client")}
            github={t("frenzy.github")}
            link={t("frenzy.site")}
            side={"left"}
            gif={gif[1]}/>
        </div>
        <Form/>
      </div>
    </div>
  )
}

export default App
