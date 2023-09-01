import "./Button.css"

const Button = ({text,size,action}) => {
  return (
    <>
      <button className={size === "small" ? "small button" :
                          size === "medium"  ? "medium button" :
                         size === "big" ?  "big button"
                          :"button" }>{text}</button>
    </>
  )
}
export default Button
