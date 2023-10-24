import "./modalFormPlanes.css";
import Swal from "sweetalert2";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";


const ModalFormPlanes = ({ handleClose }) => {
  const [user_email, setUser_email] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (user_email !== "" || message !== "") {
      emailjs
        .sendForm(
          "service_h1i7c1u",
          "template_oevvqxb",
          form.current,
          "3ISQGDxm28JZUQxZw"
        )
        .then(
          () => {
            Swal.fire({
              title: "¡Listo!",
              text: "¡Te enviamos mas información!",
              icon: "success",
              timer: 1000,
              showConfirmButton: false,
            });
            setUser_email("");
            setMessage("");
            setTimeout(() => {
              handleClose();
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <form className="formPlanes" ref={form} onSubmit={sendEmail}>
        <label htmlFor="nombre" className="inputNombre form-label">
          Nombre
        </label>
        <input
          type="text"
          name="user_name"
          className="inputNombre form-control mb-3"
          placeholder="Ingrese su nombre"
          required
        />
        <label htmlFor="email" className="inputEmail form-label">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          onChange={(e) => setUser_email(e.target.value)}
          value={user_email}
          className="inputNombre form-control mb-3"
          placeholder="Ingrese su correo electronico"
          required
        />
        <label htmlFor="message" className="inputMessage form-label">
          Plan
        </label>
        <select
          className="form-select mb-3"
          required
        >
          <option value="">Tipo de plan</option>
          <option onChange={(e) => setMessage(e.target.value)} name="message" value={message}>
            Primeros pasos
          </option>
          <option onChange={(e) => setMessage(e.target.value)} name="message" value={message}>
            Madurando
          </option>
          <option onChange={(e) => setMessage(e.target.value)} name="message" value={message}>
            Adultos
          </option>
        </select>
        <Button type="submit" value="Send" className="botonModalPlanes">
          {" "}
          Enviar{" "}
        </Button>
      </form>
    </>
  );
};

export default ModalFormPlanes;