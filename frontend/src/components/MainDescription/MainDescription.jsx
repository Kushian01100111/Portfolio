import "./MainDescription.css"
import { useRef } from "react"
import {motion as m, useScroll, useTransform } from "framer-motion"
import Logos from "./../../assets/imgs/Logos"
import Portrait from "./../../assets/imgs/Rectangle 4.png"

const MainDescription = () => {
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
                <div className="tittle"><h1 className="big">About Me</h1></div>
                <div className="containerPortrait">
                    <img src={Portrait} alt="Portrait" className="portrait"/>
                </div>
                <div>
                    <p className="small">Hola, mi nombre es Pedro Comas y soy alguien apasionado por la computación, la tecnología y el desarrollo de software. El comienzo de la cuarentena marco un cambio en mi en persona, desde ahí decidí profundizar mis previos conocimientos con el objetivo de poder dar a mi familia una vida mejor.</p>
                </div>
            </div>
        </m.div>
    </div>
  )
}

export default MainDescription
