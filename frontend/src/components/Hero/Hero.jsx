import "./Hero.css"
import Button from "../Button"
import {motion as m, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Hero = () => {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: [ "start start", "start end" ]
  })


  const opacity = useTransform(
    scrollYProgress,
    [0,0.05,0.1 ,0.2, 0.3],  
    [0,0.2,1, 1, 1]  
  )


  return (
    <m.div className="mainHero"
    >
      <m.div className="hero"
      ref={targetRef}
      style={{opacity}}>
          <div className="contentHero">
              <h2 className="medium">Building the Future with Passion: </h2>
              <h3 className="medium">Pedro Comas - Full-Stack Developer</h3>
          </div>
        <Button text={"Get in touch"} size={"small"}/>
      </m.div>
    </m.div>
  )
}

export default Hero
