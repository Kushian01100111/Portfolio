import socialLinks from './assets/imgs/Logos copy.js';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero/Hero';
import MainDescription from './components/MainDescription/MainDescription';
import Projects from './components/Projects/Projects';
import Form from './components/Form/RefactorForm.jsx';
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
      <div className='sideScroll'>
                <Hero/>
      </div>
      <div className="content">
        <MainDescription/>
        <div id='projects'>
          <div><h2 className='big'>{t("projects.title")}</h2></div>
          <Projects
            name={t("billy.title")}
            description={t("billy.description")}
            technologies={t("billy.tech", { returnObjects: true })}
            text={t("billy.technology")}
            client={t("billy.client")}
            github={t("billy.github")}
            link={t("billy.site")}
            side={"right"}
            gif={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1695389750/Rapid/Billy_Coleman_yprtrr.gif"}/>
          <Projects
            name={t("frenzy.title")}
            description={t("frenzy.description")}
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
