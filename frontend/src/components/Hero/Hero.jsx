import "./Hero.css"
import Button from "../Button"
import {motion as m, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"

const Hero = () => {
  const targetRef = useRef(null)
  const {scrollYProgess} = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  })


  useEffect(() => {
    const element = targetRef.current;
    console.log(element); // 👈️ element here
  }, []);
  const opacity = useTransform(
    scrollYProgess,
    [0, 0.5],
    [1,0]);

  return (
    <m.div className="hero"
    ref={targetRef}
    >
        <div className="contentHero">
            <h2 className="medium">Building the Future with Passion: </h2>
            <h3 className="medium">Pedro Comas - Full-Stack Developer</h3>
        </div>
      <Button text={"Get in touch"} size={"small"}/>
    </m.div>
  )
}

export default Hero
