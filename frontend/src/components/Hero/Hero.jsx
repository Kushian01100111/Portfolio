import "./Hero.css"
import Button from "../Button"
import {motion as m, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"

const Hero = () => {
  const targetRef = useRef(null)
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: [ "1 1", "0 1" ]
  })


  useEffect(() => {
    const element = targetRef.current;
    console.log(element);
    console.log(container.current) // 👈️ element here
  }, []);


  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],  
    [1, 0]  
  )

  const scale = useTransform( 
    scrollYProgress,
    [0, 0.5],  
    [1, 0.5] 
  )

console.log(scrollYProgress.get())

  return (
    <m.div className="mainHero"
    >
      <m.div className="hero"
      ref={targetRef}
      style={{opacity, scale}}>
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
