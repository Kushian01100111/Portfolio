import "./Projects.css"
import { useTranslation } from "react-i18next"

const Projects = ({name, keywords, technologies, client, github, link, side}) => {
  const { t } = useTranslation()
  return (
    <div className="project">
      <div>
          <h3 className="medium ">{name}</h3>
          <p className="small">{t("projects.part1")}: {keywords}</p>
          <ul>
            {technologies?.map((n,i)=>{
              <li key={i} className="small">{n}</li>
            })}
          </ul>
          <span className="small">{t("projects.part2")}: {client}</span>
          <div>
            <a href={github}><img src="" alt="github" /></a>
            <a href={link} className="small">{t("projects.part3")}</a>
          </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Projects
