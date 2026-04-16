import "./MainDescription.css"
import { useRef } from "react"
import {motion as m, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"
import Logos from "./../../assets/imgs/Logos"
import Portrait from "./../../assets/imgs/Rectangle 4.png"

const MainDescription = () => {
    const {t} = useTranslation()
  return (
    <div className="description">
        <m.div className="mainDescrition">
            <div className="contentDescription">
                <div className="tittle"><h1 className="big">
                {t("about")}</h1></div>
                <div>
                    <p className="small">{t("description")}</p>
                </div>
            </div>
        </m.div>
    </div>
  )
}

export default MainDescription
