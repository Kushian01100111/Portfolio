import "./Projects.css"
import {motion as m } from "framer-motion";
import { useTranslation } from "react-i18next"
import Logos from "./../../assets/imgs/Logos"

const Projects = ({name, keywords, technologies, text, client, github, link, gif, side}) => {
  const firstAnimation = {
    initial: {opacity: 0, scale: 0.8, x:20 },
    whileInView :{ opacity: 1, scale: 1, x:0,  transition: {
      type: "tween",
      duration: 1
    }}
  }
  const { t } = useTranslation()
  return (
    <m.div
    variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView"
    className={`project ${side}`}>
      <div className={`projectContent ${side}`}>
        <div className={ side === "right" ? "rightt": 
                          side === "left" ? "leftt"
                        :   ""
                        }>
            <h3 className="medium projectTitle">{name}</h3>
            <p className="small"><span className="bold">{t("projects.part1")}</span>: {keywords}</p>
            <ul className={`list${side}`}>
              <span className="bold small">{text}</span>
              { technologies?.map((n,i)=>{
                return <li key={i} className={`small`}>{n}</li>
              })}
            </ul>
            { client ? <span className="small bold">{t("projects.part2")}: {client}</span>: ""}
            <div className={`projectsLinks${side}`}>
              <a href={github} 
              target="_blank" 
              rel="noreferrer">
                <img src={Logos[0]} alt="github" className="projectGithub" />
              </a>
              <a href={link} 
              className="small projectLinkSite"
              target="_blank" 
              rel="noreferrer">
                {t("projects.part3")}
              </a>
            </div>
        </div>
      </div>
      <div className={`gifContainer ${side}`}>
        <img src={gif} alt="Gif pagina" className="gif"/>
      </div>
    </m.div>
  )
}

export default Projects
