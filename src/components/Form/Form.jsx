import "./Form.css"
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup"
import swal from "sweetalert"
import { useState } from "react";


const Form = () => {
  const [waitingForm, setWaitingForm] = useState(false)
  const { t } = useTranslation()
  const formik = useFormik({
    initialValues:{
      name: "",
      email: "",
      message: ""
    },

    validationSchema: Yup.object({
      name: Yup.string()
      .max(20, "name must be 20 charracter or less")
      .required("You must write a name"),
      email: Yup.string()
      .email("Invalid Email")
      .required("You must write an email"),
      message: Yup.string()
      .min(20, "The message must have a minimum of 5 characters or more")
      .required("You must write a message to be sent.")
    }),

    onSubmit: async (values, {resetForm})=>{
      setWaitingForm(true)
      console.log(values)
        const response = await fetch("/api/email/send", {
          method: "POST",
          headers:{ 
            'Content-type': 'application/json',
          },
          body: JSON.stringify(values),
          credentials: "include",
        })

        const json = await response.json()

        if(json){
          setWaitingForm(false)
          resetForm({values: ""})
          console.log("form submitted")
          swal({
            title: "tu mensaje fue enviado!",
            text: "tu mensaje ha sido enviado, ¡espera en breve a que te respondamos!",
            icon: "success",
        })
        }else{
          console.log("Error")
        }
    }
  })
  return (
    <>
      <h1 className="big title">{t("form.title")}</h1>
        <form 
        id="contac"
        className="contact"
        onSubmit={formik.handleSubmit}
        >
          <div>
            <div>
              <label htmlFor="name"
                className={formik.touched.name && formik.errors.name ? "error small" : "small"}
              >
              {formik.touched.name && formik.errors.name ? formik.errors.name 
              : t("form.name")}
              </label>
              <input type="text" 
                id="name"
                className="small"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label htmlFor="email"
              className={formik.touched.email && formik.errors.email 
              ? "error small"
              : "small"}>
                {formik.touched.email && formik.errors.email ? formik.errors.email 
                : "Email"}
              </label>
              <input 
              type="email" 
              id="email"
              className="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              />
            </div>
            <div>
              <label htmlFor="message"
              className={formik.touched.message && formik.errors.message ? "error small": "small"}>
                {formik.touched.mensaje && formik.errors.mensaje ? formik.errors.message : t("form.message")}  
              </label>
              <textarea 
              name="message" 
              id="message"
              className="small"
              value={formik.values.message}
              onChange={formik.handleChange} 
              >
              </textarea>
            </div>
            <div>
              { waitingForm ? (
                <div className="loader" key={waitingForm}>
                  <div className="loader-container">
                    <div className="spinner"></div>
                  </div>
                </div>
              ) :
              ( 
                <input 
                  type="submit"
                  value={t("button")}
                  className="button medium"
                  form="contac"
                  id="submit"
                />
              )}
            </div>
          </div>

      </form>
    </>
  )
}

export default Form
