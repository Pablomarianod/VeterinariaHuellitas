import "./Sobrenosotros.css";

function About() {
  return (
    <>
      <div>
        <h1 className="text-center my-4"><b>¿Quiénes somos?</b></h1>
      </div>


      <div className="containerAbout fach text-center p-5">
        <p>
          Somos un equipo de desarrolladores Full Stack apasionados por los animales y la tecnología.
          Juntos, creamos 'Huellitas', una página de veterinaria que une nuestra experiencia en desarrollo con nuestro amor por los amigos peludos.
          Con una interfaz amigable, permitimos a los dueños de mascotas acceder fácilmente a servicios veterinarios y programar citas.
          Nuestra misión es mejorar la vida de las mascotas y sus dueños a través de la innovación tecnológica y el cuidado dedicado.
        </p>
      </div>


      <h2><b>Nuestro equipo:</b></h2>

      <div className="containerCardsAbout d-flex flex-wrap justify-content-center">
        <div className="d-flex mx-4 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/pablo.jpg"
              alt="esteban"
              className="fotoCircle mx-4 mt-4"
            />
            <h3 className="text-center mt-4"><b>Pablo Décima</b></h3>
          </div>
        </div>

        <div className="d-flex mx-5 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/daniell.jpg"
              alt="esteban"
              className="fotoCircle mx-4 mt-4"
            />
            <h3 className="text-center mt-4"><b>Daniel Spiner</b></h3>
          </div>
        </div>

        <div className="d-flex mx-4 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/Estebanp.jpg"
              alt="esteban"
              className="fotoCircle mx-4 mt-4"
            />
            <h3 className="text-center mt-4"><b>Esteban Pedraza</b></h3>
          </div>
        </div>
        <div className="d-flex mx-5 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/santiago.jpg"
              alt="esteban"
              className="fotoCircle mx-4 mt-4"
            />
            <h3 className="text-center mt-4"><b>Santiago Castillo</b></h3>
          </div>
        </div>

        <div className="d-flex mx-5 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/alberto.png"
              alt="esteban"
              className="fotoCircle mx-4 mt-4"
            />
            <h3 className="text-center mt-4"><b> Alberto Aguirre</b></h3>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;