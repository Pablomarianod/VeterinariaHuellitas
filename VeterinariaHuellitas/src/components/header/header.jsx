import React, { useContext } from "react";
import { useState } from 'react';
import NavbarLogo from "../../images/navbarLogo.png";
import NavbarLogoReducido from "../../images/navbarLogoReducido.png";
import "./header.css";
import { Navbar, Nav, NavDropdown, Modal } from "react-bootstrap";
import ModalLogin from '../../components/Login/ModalLogin';
import ModalRegistro from '../../components/Registro/ModalRegistro';
import ModalTurnos from "../turnos/ModalTurnos";
import gatoLogin from "../../images/login/Gato-login.svg";
import perroLoginn from "../../images/login//Perro-img-login.svg";
import { ContextoUsuarios } from "../Context/UsuariosContext";

const Header = () => {

    const [showLogin, setShowLogin] = useState();
    const [showRegistro, setShowRegistro] = useState();
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseRegistro = () => setShowRegistro(false);
    const handleShowRegistro = () => setShowRegistro(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modalTurnos = () => {
        handleShow();
    };

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const { logOut } = useContext(ContextoUsuarios);

    return (
        <>
            <Navbar expand="lg">
                <div className="container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />



                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavDropdown
                                className="fw-bold text-center"
                                title="TIENDA"
                                id="dropdown1"
                            >
                                <NavDropdown.Item
                                    className="text-center"
                                    href="/*"
                                >
                                    Alimentos
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="text-center"
                                    href="/*"
                                >
                                    Accesorios
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="text-center"
                                    href="/*"
                                >
                                    Salud, Higiene y Estética
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                className="fw-bold text-center mb-4"
                                title="SERVICIOS"
                                id="dropdown2"
                            >
                                <NavDropdown.Item
                                    className="text-center"
                                    href="/*"
                                >
                                    Laboratorio
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="text-center"
                                    href="/*"
                                >
                                    Peluquería
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="text-center"
                                    href="/*"
                                >
                                    Urgencias
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link
                                className="fw-bold text-center"
                                type='submit' onClick={modalTurnos}
                            >
                                TURNOS
                            </Nav.Link>
                            
                            {usuario?.rol === "admin" ? (
                                <>
                                    <Nav.Link
                                        className="btn btn-info text-black mx-auto mb-4 rounded-pill fw-bold"
                                        href="/administracion"
                                    >
                                        ADMINISTRACIÓN
                                    </Nav.Link>
                                </>
                            ) : null}
                            
                        </Nav>
     
                        <div className="mx-auto">
                            <div className=" d-none d-lg-block">
                                <Navbar.Brand href="/">
                                    <div
                                        className="estilo-link fw-bold"
                                        onClick={() => navigate('/error404')}
                                    >
                                        <img src={NavbarLogo} alt="Logo" className="img-fluid" />
                                    </div>
                                </Navbar.Brand>
                            </div>
                        </div>

                        <Nav.Link
                                className="fw-bold text-center mb-4"
                                href="/misMascotas"
                            >
                                Mis Mascotas
                            </Nav.Link>


                        <Nav className="mx-auto">

                            {usuario ? (
                                <>
                                    <Nav className="mx-auto">
                                        <button
                                            className="btn btn-info text-black mx-auto mb-4 rounded-pill fw-bold"
                                            onClick={logOut}
                                            href="/"
                                        >
                                            CERRAR SESIÓN
                                        </button>
                                    </Nav>
                                </>
                            ) : (
                                <>
                                    <Nav className="mx-auto">
                                        <button
                                            className="btn btn-info text-black mx-auto mb-4 rounded-pill fw-bold"
                                            type='submit' onClick={handleShowLogin}
                                        >
                                            INICIAR SESIÓN
                                        </button>
                                    </Nav>
                                </>
                            )}
                            {
                                showLogin && <ModalLogin show={showLogin} handleClose={handleCloseLogin} handleShowRegistro={handleShowRegistro}></ModalLogin>
                            }
                        </Nav>
                        {
                            showRegistro && <ModalRegistro show={showRegistro} handleClose={handleCloseRegistro}></ModalRegistro>
                        }

                    </Navbar.Collapse>
                    <div className="d-lg-none mx-auto mt-0">
                        <Navbar.Brand href="/">
                            <img
                                src={NavbarLogoReducido}
                                alt="Logo de Huellitas reducido"
                                className="d-flex img-fluid mt-4"
                            />
                        </Navbar.Brand>
                    </div>
                </div>
            </Navbar>

            <Modal centered size="md" show={show} onHide={handleClose}>
                <div className="contenedorModalTurnos">
                    <Modal.Header
                        className="headerModalTurnos border-bottom-0"
                        closeButton
                    >
                        <div>
                            <div className="contenedorImagenesTurnos">
                                <img
                                    src={gatoLogin}
                                    alt="CaraDegato"
                                    className="alturaImagen"
                                />
                                <img
                                    src={perroLoginn}
                                    alt="CaraDePerro"
                                    className="alturaImagen"
                                />
                            </div>
                            <h2 className="contenedorTituloTurnos text-center mt-2">
                                TURNOS
                            </h2>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="bodyModalTurnos">
                        <ModalTurnos handleClose={handleClose} />
                    </Modal.Body>
                </div>
            </Modal>

        </>
    );
};

export default Header;