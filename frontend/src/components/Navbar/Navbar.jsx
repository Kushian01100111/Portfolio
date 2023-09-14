import "./Navbar.css"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import {motion as m} from "framer-motion"
import Logos from "./../../assets/imgs/Logos"

const Navbar = ({scroll}) => {
    const [active, setActive] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
  return (
    <>
    {width <= 900 ? (
        <header className="header">
            <div className="navbar">
                <div className="title">
                    <h1 className="big">PC</h1>
                </div>
                <div>
                    <ul>
                        <div onClick={() => setActive(!active)}>
                            <m.div animate={ 
                                !active ? {
                                width: 35, 
                                height:4, 
                                backgroundColor: "#fff", 
                                margin: 5, 
                                borderRadius: 20, 
                                transform: "translateY(0px) rotate(0deg)"}
                                :{width: 35, 
                                height:4, 
                                backgroundColor: "#fff", margin: 5, 
                                borderRadius: 20,
                                transform: "translateY(8px) rotate(45deg)"}}></m.div>
                            <m.div animate={ 
                                !active ? {
                                width: 35, 
                                height:4, 
                                backgroundColor: "#fff", 
                                margin: 5, 
                                borderRadius: 20}
                                :{width: 35, 
                                height:4, 
                                backgroundColor: "#fff", 
                                margin: 5, 
                                borderRadius: 20, 
                                opacity: 0}}></m.div>
                            <m.div animate={ 
                                !active ? {
                                width: 35, 
                                height:4, 
                                backgroundColor: "#fff", 
                                margin: 5, 
                                borderRadius: 20, 
                                transform: "translateY(0px) rotate(0deg)"}
                                :{width: 35,
                                height:4, 
                                backgroundColor: "#fff", margin: 5, 
                                borderRadius: 20, 
                                transform: "translateY(-10px) rotate(-45deg)"}}></m.div>
                        </div>
                    </ul>
                </div>
            </div>
            <m.div className="contentLinksSmaller"
                animate={active ? {x: 0 , y: -1, display: "block", opacity: 1, zIndex: 1} : ""}
                initial={{x: -1000,y: 0, display: "hidden", opacity: 0, zIndex: -1}}
                transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.6}}>
                    <ul className="linksSmaller">
                        <li><a href="#projects" onClick={() => {
                                scroll("projects")
                                setActive(!active)
                        }}>Projects</a></li>
                        <li><a href="#contact"
                        onClick={() => {
                                scroll("getInTouch")
                                setActive(!active)}}>Contact</a></li>
                        <div className="socialsLinks">
                            <li><a href="#"><img src={Logos[1]} alt="LinkedIn"  className="linkLogo"/></a></li>
                            <li><a href="#"><img src={Logos[2]} alt="Gmail"  className="linkLogo"/></a></li>
                        </div>
                    </ul>
            </m.div>
        </header>
    ) : (
        <header>

        </header>
    )}
    </>
  )
}

export default Navbar
