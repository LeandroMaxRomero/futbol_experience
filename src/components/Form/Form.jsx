import { useRef, useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Button } from "../Button/Button";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Form = () => {
  const form = useRef();
  const { lang } = useContext(LenguaContext);

  const SERVICE_ID = "service_gx8k6dn";
  const TEMPLATE_ID = "template_6huw7jd";
  const PUBLIC_KEY = "s7HZBf9HzTnCs8rEW";

  /*  const SERVICE_ID = "service_5um3sgw";
  const TEMPLATE_ID = "template_kbof8zm";
  const PUBLIC_KEY = "OPrAo-TUzCdQEaWPc"; */

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(
        3,
        lang === "castellano"
          ? "Nombre debe tener al menos tres caracteres"
          : "Name must be at least 3 characters"
      )
      .max(
        30,
        lang === "castellano"
          ? "Nombre no debe exceder de 30 caracteres"
          : "Name must not exceed 30 characters"
      )
      .required(lang === "castellano" ? "Campo requerido" : "Required field"),
    lastName: Yup.string()
      .min(
        3,
        lang === "castellano"
          ? "Nombre debe tener al menos tres caracteres"
          : "Name must be at least 3 characters"
      )
      .max(
        30,
        lang === "castellano"
          ? "Nombre no debe exceder de 30 caracteres"
          : "Name must not exceed 30 characters"
      )
      .required(lang === "castellano" ? "Campo requerido" : "Required field"),
    phone: Yup.number()
      .positive()
      .integer()
      .required(lang === "castellano" ? "Campo requerido" : "Required field"),
    email: Yup.string()
      .email(lang === "castellano" ? "Email incorrecto" : "Wrong email")
      .required(lang === "castellano" ? "Campo requerido" : "Required field"),
    comments: Yup.string()
      .max(
        250,
        lang === "castellano"
          ? "Debe tener menos de 250 caracteres"
          : "Must be less than 250 characters"
      )
      .required(lang === "castellano" ? "Campo requerido" : "Required field"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      comments: "",
    },
    validationSchema,
    onSubmit: () => {
      try {
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
          .then(
            lang === "castellano"
              ? Swal.fire({
                  title: "Enviado correctamente",
                  /* text:  */
                  icon: "success",
                  confirmButtonText: "Continuar",
                })
              : Swal.fire({
                  title: "Send succesfully",
                  /* text:  */
                  icon: "success",
                  confirmButtonText: "Continue",
                }),

            formik.handleReset()
          );
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <input
          className={
            formik.errors.name && formik.touched.name
              ? "form-name contact-error"
              : "form-name"
          }
          type="text"
          name="name"
          placeholder={lang === "castellano" ? "Nombre" : "Name"}
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <input
          className={
            formik.errors.lastName && formik.touched.lastName
              ? "form-lastName contact-error"
              : " form-lastName"
          }
          type="text"
          name="lastName"
          placeholder={lang === "castellano" ? "Apellido" : "Last Name"}
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>

      <input
        type="text"
        name="phone"
        placeholder={lang === "castellano" ? "Teléfono" : "Phone Number"}
        value={formik.values.phone}
        onChange={formik.handleChange}
        className={
          formik.errors.phone && formik.touched.phone && "contact-error"
        }
      />

      <input
        type="email"
        name="email"
        placeholder={lang === "castellano" ? "Correo electrónico" : "Email"}
        value={formik.values.email}
        onChange={formik.handleChange}
        className={
          formik.errors.email && formik.touched.email && "contact-error"
        }
      />

      <textarea
        name="comments"
        cols="30"
        rows="10"
        placeholder={lang === "castellano" ? "Comentario" : "Comment"}
        value={formik.values.comments}
        onChange={formik.handleChange}
        className={
          formik.errors.comments && formik.touched.comments && "contact-error"
        }
      />

      {lang === "castellano" ? (
        <Button type="submit" buttonStyle="btn-contacto">
          Enviar Formulario
        </Button>
      ) : (
        <Button type="submit" buttonStyle="btn-contacto">
          Send Form
        </Button>
      )}
    </form>
  );
};

export default Form;
