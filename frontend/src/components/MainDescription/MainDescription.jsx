import "./MainDescription.css"
import { useRef } from "react"
import {motion as m, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"
import Logos from "./../../assets/imgs/Logos"
import Portrait from "./../../assets/imgs/Rectangle 4.png"

const MainDescription = () => {
    const {t} = useTranslation()
    const targetRef = useRef(null)
    const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: [ "start start", "end start" ]
  })


  const opacity = useTransform(
    scrollYProgress,
    [0,0.8],  
    [1,0]  
  )

  return (
    <div className="description">
        <m.div className="mainDescrition"
            ref={targetRef}
            style={{opacity}}>
            <div>
                <div className="tech react">
                    <m.img 
                    src={Logos[6]} 
                    alt="React.js"  
                    className="techImg"
                    drag
                    dragConstraints={{
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                    }}
                    />
                </div>
                <div className="tech python">
                    <m.img 
                    src={Logos[5]} 
                    alt="Python"  
                    className="techImg"
                    drag
                    dragConstraints={{
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                    }}
                    />
                </div>
                <div className="tech javascript">
                    <m.img 
                    src={Logos[7]} 
                    alt="JavaScript"  
                    className="techImg"
                    drag
                    dragConstraints={{
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                    }}
                    />
                </div>
                <div className="tech node   ">
                    <m.img src={Logos[8]} 
                    alt="Node.js"  
                    className="techImg"
                    drag
                    dragConstraints={{
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                    }}
                    />
                </div>
            </div>
            <div className="contentDescription">
                <div className="tittle"><h1 className="big">
                {t("about")}</h1></div>
                <div className="containerPortrait">
                    <img src={Portrait} alt="Portrait" className="portrait"/>
                </div>
                <div>
                    <p className="small">{t("description")}</p>
                </div>
            </div>
        </m.div>
    </div>
  )
}

export default MainDescription
