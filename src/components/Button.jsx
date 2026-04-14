import "./Button.css"

const Button = ({text,size,action}) => {
  function scrollToTarget(target) {
    const targetSection = document.getElementById(`${target}`);
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <button className={size === "small" ? "small button" :
                          size === "medium"  ? "medium button" :
                         size === "big" ?  "big button"
                          :"button" }
                          onClick={()=> scrollToTarget(action)}>{text}</button>
    </>
  )
}
export default Button
