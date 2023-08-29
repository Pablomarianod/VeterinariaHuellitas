import React from "react";
import NavbarLogo from "../../images/navbarLogo.png";
import NavbarLogoReducido from "../../images/navbarLogoReducido.png";
import "./header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// Agregar import de componente turnos
// Agregar import de componentes que redirigan al modal de inicio de sesión y registro

const EstructuraNavbar = () => {
  // const navigate = useNavigate();

  return (
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
                href="#"
              >
                Alimentos balanceados
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-center"
                href="#"
              >
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-center"
                href="#"
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
                href="#"
              >
                Laboratorio
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-center"
                href="#"
              >
                Peluquería
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-center"
                href="#"
              >
                Urgencias
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              className="fw-bold text-center"
              href="#"
            >
              TURNOS
            </Nav.Link>
          </Nav>
          <div className="mx-auto">
            <div className=" d-none d-lg-block">
              <Navbar.Brand href="#">
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
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              INICIAR SESIÓN
            </button>
          </Nav>
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
  );
};

export default EstructuraNavbar;

