import { useRef } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import { Button } from "../Button/Button";

const Form = () => {
  const form = useRef();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(30).required("Campo requerido"),
    lastName: Yup.string().min(3).max(30).required("Campo requerido"),
    phone: Yup.number().positive().integer().required("Campo requerido"),
    email: Yup.string().email("Email incorrecto").required("Campo requerido"),
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

      /*    navigate(
        ` https://api.whatsapp.com/send?phone=+524613904575&text=Holllllaaaaaa`
      ); */
    },
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <input
          className="form-name"
          type="text"
          name="name"
          placeholder="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <span className="error">
          {formik.errors.name && formik.touched.name && formik.errors.name}
        </span>
        <input
          className="form-lastName"
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>

      <span className="error">
        {formik.errors.lastName &&
          formik.touched.lastName &&
          formik.errors.lastName}
      </span>
      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      <span className="error">
        {formik.errors.phone && formik.touched.phone && formik.errors.phone}
      </span>
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
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
        placeholder="Comentario"
        value={formik.values.comments}
        onChange={formik.handleChange}
      />
      <span className="error">
        {formik.errors.comments &&
          formik.touched.comments &&
          formik.errors.comments}
      </span>

      <input type="submit" value="Enviar Formulario" />
    </form>
  );
};

export default Form;
