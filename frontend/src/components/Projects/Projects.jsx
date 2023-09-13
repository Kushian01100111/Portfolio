import "./Projects.css"
import { useTranslation } from "react-i18next"
import Logos from "./../../assets/imgs/Logos"

const Projects = ({name, keywords, technologies, client, github, link, gif, side}) => {
  const { t } = useTranslation()
  return (
    <div className="project">
      <div className={ side === "right" ? "right": 
                        side === "left" ? "left"
                      :   ""
                      }>
          <h3 className="medium ">{name}</h3>
          <p className="small">{t("projects.part1")}: {keywords}</p>
          <ul>
            { technologies?.map((n,i)=>{
              return <li key={i} className="small">{n}</li>
            })}
          </ul>
          { client ? <span className="small">{t("projects.part2")}: {client}</span>: ""}
          <div>
            <a href={github}><img src={Logos[0]} alt="github" /></a>
            <a href={link} className="small">{t("projects.part3")}</a>
          </div>
      </div>
      <div className="gifContainer">
        <img src={gif} alt="Gif pagina" className="gif"/>
      </div>
    </div>
  )
}

export default Projects
