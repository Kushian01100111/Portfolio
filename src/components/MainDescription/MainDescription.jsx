import "./MainDescription.css"
import { useRef } from "react"
import {motion as m, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"
import Logos from "./../../assets/imgs/Logos"
import Portrait from "./../../assets/imgs/Rectangle 4.png"

const MainDescription = () => {
    const {t} = useTranslation()
  return (
    <div>
        <m.div className="mainDescrition">
            <div className="contentDescription">
                <div className="title"></div>
                <div className="description">
                    <p className="small">{t("description.part1")}</p>
                    <p className="small">{t("description.part2")}</p>
                    <p className="small">{t("description.part3")}</p>
                </div>
            </div>
        </m.div>
    </div>
  )
}

export default MainDescription
