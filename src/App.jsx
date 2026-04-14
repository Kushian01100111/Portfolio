import Images from './assets/imgs/Logos copy.js';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainDescription from './components/MainDescription/MainDescription';
import Projects from './components/Projects/Projects';
import Form from './components/Form/Form';
import ChangeLanguage from './components/ChangeLanguage/ChangeLanguage.jsx';
import './App.css';

function App() {
  const { t } = useTranslation()
  const date = (new Date).getFullYear()
  function scrollToTarget(target) {
    const targetSection = document.getElementById(`${target}`);
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className='App'>
      <Navbar scroll={scrollToTarget}/>
      <div 
      className="content">
        <Hero/>
        <MainDescription/>
        <div id='projects'>
          <div><h2 className='big bold'>{t("projects.title")}</h2></div>
          <Projects
            name={t("billy.title")}
            keywords={t("billy.description")}
            technologies={t("billy.tech", { returnObjects: true })}
            text={t("billy.technology")}
            client={t("billy.client")}
            github={t("billy.github")}
            link={t("billy.site")}
            side={"right"}
            gif={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1695389750/Rapid/Billy_Coleman_yprtrr.gif"}/>
          <Projects
            name={t("frenzy.title")}
            keywords={t("frenzy.description")}
            technologies={t("frenzy.tech", { returnObjects: true })}
            text={t("frenzy.technology")}
            client={t("frenzy.client")}
            github={t("frenzy.github")}
            link={t("frenzy.site")}
            side={"left"}
            gif={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1695389875/Rapid/Frenzy_wbgs7c.gif"}/>
        </div>
        <div id='getInTouch'>
          <Form/>
        </div>
        <div id="socials">
          <ul className='socialLogs'>
            {
                Images.map((n,i)=>{
                 return <li className='logos' key={i}><a 
                  href={n[1]}
                  target="_blank" 
                  rel="noreferrer"><img src={n[0]} alt="Logo" /></a></li>
                })
              }
          </ul>
        </div>
        <div>
          <small className='small'
          style={{display: "flex", alignItems: "flex-start"}}>{date}&copy; All Rights Reserved, Pedro Comas</small>
        </div>
        <ChangeLanguage/>
      </div>
    </div>
  )
}

export default App
