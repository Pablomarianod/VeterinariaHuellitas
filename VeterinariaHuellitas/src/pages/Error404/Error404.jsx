import "./error404.css";

function Error404() {
  return (
    <>
      <div className="container vh-100">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3"></div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <h1 className="text-center my-5 neon-text">
              Pagina no encontrada
            </h1>
            <div className="main-img text-center pt-5 colorFondo">
              <img
                src="/src/images/Superperro.png"
                alt="perro"
                className="img-fluid"
              />
              <p className="main-description pt-5">
                El enlace que seguiste probablemente no está funcionando o la página ha
                sido eliminada
              </p>

              <buttom className="btn btn-sz-primary mt-5">
                <b>Volver al inicio</b>
              </buttom>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default Error404;