import "./Form.css";
import { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Swal from "sweetalert2";

const Form = () => {
  const [waitingForm, setWaitingForm] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, t("form.errors.nameMax"))
        .required(t("form.errors.nameRequired")),
      email: Yup.string()
        .email(t("form.errors.emailInvalid"))
        .required(t("form.errors.emailRequired")),
      message: Yup.string()
        .min(20, t("form.errors.messageMin"))
        .required(t("form.errors.messageRequired")),
    }),
    onSubmit: async (values, { resetForm }) => {
        setWaitingForm(true);

        try {
            const response = await fetch("/api/resend/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
            });

            const json = await response.json();

            if (!response.ok) {
            throw new Error(json?.error || "Failed to send message");
            }

            resetForm();

            await Swal.fire({
            title: "Message sent!",
            text: "Your message has been sent successfully.",
            icon: "success"
            });
        } catch (error) {
            await Swal.fire({
            title: "Something went wrong",
            text: error.message || "Could not send the message.",
            icon: "error"
            });
        } finally {
            setWaitingForm(false);
        }
    }
  });

  return (
    <>
      <h1 className="big title">{t("form.title")}</h1>

      <form id="contact" className="contact" onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <label
              htmlFor="name"
              className={
                formik.touched.name && formik.errors.name ? "error small" : "small"
              }
            >
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : t("form.name")}
            </label>

            <input
              type="text"
              id="name"
              name="name"
              className="small"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="name"
              aria-invalid={Boolean(formik.touched.name && formik.errors.name)}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={
                formik.touched.email && formik.errors.email ? "error small" : "small"
              }
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="email"
              aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={
                formik.touched.message && formik.errors.message
                  ? "error small"
                  : "small"
              }
            >
              {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : t("form.message")}
            </label>

            <textarea
              id="message"
              name="message"
              className="small"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={Boolean(
                formik.touched.message && formik.errors.message
              )}
            />
          </div>

          <div>
            {waitingForm ? (
              <div className="loader">
                <div className="loader-container">
                  <div className="spinner"></div>
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="button medium"
                id="submit"
                disabled={waitingForm}
              >
                {t("button")}
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;