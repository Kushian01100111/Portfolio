import { useState } from "react"
import { useTranslation } from "react-i18next"
import "./ChangeLanguage.css"

const ChangeLanguage = () => {
    const { i18n } = useTranslation()
    const [show, setShow] = useState({
        en: true,
        es: false
    })

    const onClick = (lng)=>{
        i18n.changeLanguage(lng)
        if(lng === "en"){
            setShow({
                en: true,
                es: false
            })
        }else{
            setShow({
                en: false,
                es: true
        })
        }
    }
  return (
    <div className="language">
        <ul>
            <li>
                <button type="submit" disabled={show.en === true} className="languageButton"
                    onClick={()=> onClick("en")}>
                    <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" alt=""  
                        className="flags"
                    />
                </button>
            </li>
            <li>
                <button type="submit" disabled={show.es === true} className="languageButton"
                    onClick={()=> onClick("es")}>
                    <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" alt=""  
                        className="flags"
                    />
                </button>
            </li>
        </ul>
    </div>
  )
}

export default ChangeLanguage
