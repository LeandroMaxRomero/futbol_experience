import { useRef, useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const { lang } = useContext(LenguaContext);

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
    comments: Yup.string().max(250, "Debe tener menos de 250 caracteres"),
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
          .sendForm(
            "service_5um3sgw",
            "template_kbof8zm",
            form.current,
            "OPrAo-TUzCdQEaWPc"
          )
          .then(
            console.log("Enviado Correctamente. Gracias por tus comentarios")
          );
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      <div className="form-group">
        {/* <div className="form-group__error"> */}
        <input
          className="form-name"
          type="text"
          name="name"
          placeholder={lang === "castellano" ? "Nombre" : "Name"}
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        {/* </div> */}
        {/*  <div className="form-group__error"> */}
        <input
          className="form-lastName"
          type="text"
          name="lastName"
          placeholder={lang === "castellano" ? "Apellido" : "Last Name"}
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />

        {/*    </div> */}
      </div>
      <div className="top-error">
        <span className="error">
          {formik.errors.name && formik.touched.name && formik.errors.name}
        </span>
        <span className="error">
          {formik.errors.lastName &&
            formik.touched.lastName &&
            formik.errors.lastName}
        </span>
      </div>

      <input
        type="text"
        name="phone"
        placeholder={lang === "castellano" ? "Teléfono" : "Phone Number"}
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      <span className="error">
        {formik.errors.phone && formik.touched.phone && formik.errors.phone}
      </span>
      <input
        type="email"
        name="email"
        placeholder={lang === "castellano" ? "Correo electrónico" : "Email"}
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <span className="error">
        {formik.errors.email && formik.touched.email && formik.errors.email}
      </span>
      <textarea
        name="comments"
        cols="30"
        rows="10"
        placeholder={lang === "castellano" ? "Comentario" : "Comment"}
        value={formik.values.comments}
        onChange={formik.handleChange}
      />
      <span className="error">
        {formik.errors.comments &&
          formik.touched.comments &&
          formik.errors.comments}
      </span>

      <input
        type="submit"
        value={lang === "castellano" ? "Enviar Formulario" : "Send Form"}
      />
    </form>
  );
};

export default Form;
