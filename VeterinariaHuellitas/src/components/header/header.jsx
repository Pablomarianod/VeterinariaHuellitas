import React from "react";
import { useState } from 'react';
import NavbarLogo from "../../images/navbarLogo.png";
import NavbarLogoReducido from "../../images/navbarLogoReducido.png";
import "./header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import ModalLogin from '../src/components/Login/ModalLogin';
// import ModalRegistro from '../src/components/Registro/ModalRegistro';

const Header = () => {

  const [show, setShow] = useState(false);

  const [showLogin, setShowLogin] = useState();
  const [showRegistro, setShowRegistro] = useState();
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegistro = () => setShowRegistro(false);
  const handleShowRegistro = () => setShowRegistro(true);

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
                className="fw-bold text-center"
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
                href="/"
              >
                TURNOS
              </Nav.Link>
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


            <Nav className="mx-auto">
              <button
                className="btn btn-info text-black mx-auto rounded-pill fw-bold"
                type='submit' onClick={handleShowLogin}


              >
                INICIAR SESIÓN
              </button>
              {
                showLogin && <ModalLogin show={showLogin} handleClose={handleCloseLogin} handleShowRegistro={handleShowRegistro}></ModalLogin>
              }
            </Nav>
            {/* <Nav.Link end className='nav-item nav-link' onClick={handleShowRegistro}>Registrarse</Nav.Link>
            {
              showRegistro && <ModalRegistro show={showRegistro} handleClose={handleCloseRegistro}></ModalRegistro>
            } */}
          </Navbar.Collapse>
          <div className="d-lg-none mx-auto mt-0">
            <Navbar.Brand href="/error404">
              <img
                src={NavbarLogoReducido}
                alt="Logo de Huellitas reducido"
                className="d-flex img-fluid mt-4"
              />
            </Navbar.Brand>
          </div>
        </div>
      </Navbar>
      {/* <ModalLogin show={show} handleClose={handleClose} /> */}

      {/* Codigo de santiago */}

      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Nav.Link end className='nav-item nav-link' onClick={handleShowLogin}>INICIAR SESIÓN</Nav.Link>
        {
          showLogin && <ModalLogin show={showLogin} handleClose={handleCloseLogin} handleShowRegistro={handleShowRegistro}></ModalLogin>
        }
        <Nav.Link end className='nav-item nav-link' onClick={handleShowRegistro}>Registrarse</Nav.Link>
        {
          showRegistro && <ModalRegistro show={showRegistro} handleClose={handleCloseRegistro}></ModalRegistro>
        }
      </Navbar> */}

      {/* Fin de codigo de santiago */}

    </>
  );
};

export default Header;