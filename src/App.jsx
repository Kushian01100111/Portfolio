import { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills.jsx';
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

  const addRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = addRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    addRef.current.style.setProperty("--mouse-x", `${x}px`);
    addRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className='Add'
      ref={addRef}
      onMouseMove={handleMouseMove}>
    <div className='App'>
      <div className='sideScroll'>
                <Hero/>
      </div>
      <div className="content">
        <MainDescription/>
        <Skills/>
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
    </div>
  )
}

export default App
