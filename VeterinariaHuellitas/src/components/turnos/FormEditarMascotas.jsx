import { useContext, useState } from "react";
import { ContextoMascotas } from "../Context/MascotasContext";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import "./FormEdit.css";

const FormEditarMascotas = ({ handleClose, edicionMascota }) => {
    const [mascota, setMascota] = useState(edicionMascota);
    const { modificarMascota } = useContext(ContextoMascotas);

    const handleChange = (e) => {
        setMascota({ ...mascota, [e.target.name]: e.target.value });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        modificarMascota(mascota);
        Swal.fire({
            title: "Mascota editada correctamente",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
        });
        handleClose();
    };

    return (
        <>
            <form onSubmit={handleEdit}>
                <label htmlFor="nombre" className="labelNombre form-label">
                    Nombre
                </label>
                <input
                    type="string"
                    name="nombre"
                    value={mascota.nombreMascota}
                    onChange={handleChange}
                    className="inputNombre form-control mb-2"
                    required
                ></input>

                <label htmlFor="sexo" className="labelSexo form-label">
                    Sexo
                </label>
                <input
                    type="string"
                    name="sexo"
                    value={mascota.sexoMascota}
                    onChange={handleChange}
                    className="inputSexo form-control mb-2"
                    required
                ></input>

                <label htmlFor="edad" className="labelEdad form-label">
                    Edad
                </label>
                <input
                    type="number"
                    name="edad"
                    value={mascota.edad}
                    onChange={handleChange}
                    className="inputEdad form-control mb-2"
                    required
                ></input>

                <label htmlFor="raza" className="labelRaza form-label">
                    Raza
                </label>
                <input
                    type="string"
                    name="raza"
                    value={mascota.raza}
                    onChange={handleChange}
                    className="inputRaza form-control mb-2"
                    required
                ></input>

                <label htmlFor="especie" className="labelEspecie form-label">
                    Especie
                </label>
                <select
                    className="inputEspecie form-select mb-3"
                    name="especie"
                    value={mascota.especie}
                    onChange={handleChange}
                    required
                >
                    <option value="">Especie</option>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Ave</option>
                    <option>Roedor</option>
                </select>

                <Button type="submit" className="botonEditarForm">
                    EDITAR
                </Button>
                <Button onClick={handleClose} className="botonEditarForm">
                    CANCELAR
                </Button>
            </form>
        </>
    );
};

export default FormEditarMascotas;