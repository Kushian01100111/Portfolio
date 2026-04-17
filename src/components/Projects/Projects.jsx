import "./Projects.css"
import {motion as m } from "framer-motion";
import { useTranslation } from "react-i18next"
import Logos from "./../../assets/imgs/Logos"

const Projects = ({name, description, technologies, text, client, github, link, gif, side}) => {
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
            <p className="small">
                {description}
            </p>
            <ul className={`list${side}`}>
              <span className="bold small">{text}</span>
              { technologies?.map((n,i)=>{
                return <li key={i} className={`small`}>{n}</li>
              })}
            </ul>
            <div className={`projectsLinks${side}`}>
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
