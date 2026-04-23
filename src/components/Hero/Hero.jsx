import "./Hero.css"
import socialLinks from "../../assets/imgs/Logos copy"
import Button from "../Button"
import {motion as m, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "react-i18next"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <m.div className="mainHero">
      <m.div className="hero">
          <div className="contentHero">
              <h2 className="bigger bold"> {t("title")}</h2>
              <h3 className="small"> {t("sub-title")}</h3>
              <h4></h4>
              <ul className="navList">
                <li>
                  <a href="#about" className="navLink">
                    <span class="navIndicator"></span>
                    <span class="navText smaller">{t("nav.about")}</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="navLink">
                    <span class="navIndicator"></span>
                    <span class="navText smaller">{t("nav.projects")}</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="navLink">
                    <span class="navIndicator"></span>
                    <span class="navText smaller">{t("nav.contact")}</span>
                  </a>
                </li>
            </ul>
          </div>
          <div id="socials">
            <ul className="socialLogs">
              {socialLinks.map((item) => (
                <li className="logos" key={item.id}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <img src={item.icon} alt={item.alt} />
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </m.div>
    </m.div>
  )
}

export default Hero
