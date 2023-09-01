import "./Sobrenosotros.css";

function About() {

  const handleLinkedInClick = (url) => {
    window.open(url, '_blank');
  };

  const handleGitHubClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div>
        <h1 className="text-center my-4 tituloAbout"><b>¿Quiénes somos?</b></h1>
      </div>


      <div className="containerDescripcion text-center p-5">
        <p>
          Somos un equipo de desarrolladores Full Stack apasionados por los animales y la tecnología.
          Juntos, creamos 'Huellitas', una página de veterinaria que une nuestra experiencia en desarrollo con nuestro amor por los amigos peludos.
          Con una interfaz amigable, permitimos a los dueños de mascotas acceder fácilmente a servicios veterinarios y programar citas.
          Nuestra misión es mejorar la vida de las mascotas y sus dueños a través de la innovación tecnológica y el cuidado dedicado.
        </p>
      </div>

      <div className="containerSeparacion my-5">
        <hr />
      </div>


      <h1 className="text-center tituloAbout"><b>Nuestro equipo:</b></h1>


      <div className="containerCardAbout d-flex flex-wrap justify-content-center">
        <div className="d-flex mx-4 my-4 cardIntegrante">
          <div
            className="cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/pablo.jpg"
              alt="Pablo"
              className="fotoCircle mt-4"
            />
            <h3 className="text-center mt-4"><b>Pablo Décima</b></h3>
            <div className="d-flex justify-content-evenly">
            <i
                className="bi bi-linkedin mb-2 botonIcono"
                onClick={() => handleLinkedInClick("https://www.linkedin.com/in/pablo-mariano-d/")}
              ></i>
              <i
                className="bi bi-github mb-2 botonIcono"
                onClick={() => handleGitHubClick("https://github.com/Pablomarianod")}
              ></i>

            </div>


          </div>
        </div>

        <div className="d-flex mx-5 my-4 cardIntegrante">
          <div
            className="cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/daniell.jpg"
              alt="Daniel"
              className="fotoCircle  mt-4"
            />
            <h3 className="text-center mt-4"><b>Daniel Spiner</b></h3>

            <div className="d-flex justify-content-evenly">
            <i
                className="bi bi-linkedin mb-2 botonIcono"
                onClick={() => handleLinkedInClick("https://www.linkedin.com/in/daniel-spiner-7b46a8271/")}
              ></i>
              <i
                className="bi bi-github mb-2 botonIcono"
                onClick={() => handleGitHubClick("https://github.com/danielspiner")}
              ></i>

            </div>

          </div>
        </div>

        <div className="d-flex mx-4 my-4 cardIntegrante">
          <div
            className="cambiocolor "
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/Estebanp.jpg"
              alt="Esteban"
              className="fotoCircle mt-4"
            />

            <h3 className="text-center mt-4"><b>Esteban Pedraza</b></h3>

            <div className="d-flex justify-content-evenly colorIcon">
            <i
                className="bi bi-linkedin mb-2 botonIcono"
                onClick={() => handleLinkedInClick("https://ar.linkedin.com/in/esteban-pedraza-82b938284")}
              ></i>
              <i
                className="bi bi-github mb-2 botonIcono"
                onClick={() => handleGitHubClick("https://github.com/esteban-82")}
              ></i>

            </div>

          </div>
        </div>
      </div>


      <div className="containerCardAbout d-flex flex-wrap justify-content-center">
        
        <div className="d-flex mx-5 my-4 cardIntegrante">
          <div
            className="cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/santiago.jpg"
              alt="Santiago"
              className="fotoCircle mt-4"
            />
            <h3 className="text-center mt-4"><b>Santiago Castillo</b></h3>

            <div className="d-flex justify-content-evenly">
            <i
                className="bi bi-linkedin mb-2 botonIcono"
                onClick={() => handleLinkedInClick("https://www.linkedin.com/")}
              ></i>
              <i
                className="bi bi-github mb-2 botonIcono"
                onClick={() => handleGitHubClick("https://github.com/SantiagoECastillo")}
              ></i>

            </div>

          </div>
        </div>

        <div className="d-flex mx-5 my-4 cardIntegrante">
          <div
            className=" cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/alberto.png"
              alt="Alberto"
              className="fotoCircle mt-4"
            />
            <h3 className="text-center mt-4"><b> Alberto Aguirre</b></h3>

            <div className="d-flex justify-content-evenly">
            <i
                className="bi bi-linkedin mb-2 botonIcono"
                onClick={() => handleLinkedInClick("https://www.linkedin.com/in/alberto-aguirre-691b5128a")}
              ></i>
              <i
                className="bi bi-github mb-2 botonIcono"
                onClick={() => handleGitHubClick("https://github.com/amalberto")}
              ></i>

            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default About;