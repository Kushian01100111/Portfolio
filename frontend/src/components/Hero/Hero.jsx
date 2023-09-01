import "./Hero.css"
import Button from "../Button"

const Hero = () => {
  return (
    <div className="hero">
        <div className="contentHero">
            <h2 className="medium">Building the Future with Passion: </h2>
            <h3 className="medium">Pedro Comas - Full-Stack Developer</h3>
        </div>
      <Button text={"Get in touch"} size={"small"}/>
    </div>
  )
}

export default Hero
