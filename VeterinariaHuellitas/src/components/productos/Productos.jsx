import "./productos.css";
import { Button, Card } from 'react-bootstrap';

const Productos = () => {

    return (
        <div className="product-container col-12">
            <h1>Productos Destacados</h1>

            <div className="product-cards-container">

                <Card className="product-card">
                    <Card.Img variant="top" src="/src/images/productos/alimentos.png"/>
                    <Card.Body>
                        <Card.Title className="card-title">Royal canin</Card.Title>
                        <Card.Text className="card-text">
                            Producto: Alimento
                            <br />
                            Precio: $ 30.000
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="product-card">
                    <Card.Img variant="top" src="/src/images/productos/cuchaMascotas.jpg" />
                    <Card.Body>
                        <Card.Title className="card-title">K-9</Card.Title>
                        <Card.Text className="card-text">
                            Producto: Cucha Mascotas
                            <br />
                            Precio: $ 50.000
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="product-card">
                    <Card.Img variant="top" src="/src/images/productos/fundaMascotas.jpg" />
                    <Card.Body>
                        <Card.Title className="card-title">K-9</Card.Title>
                        <Card.Text className="card-text">
                            Producto: Funda Mascotas
                            <br />
                            Precio: $ 15.000
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="product-card">
                    <Card.Img variant="top" src="/src/images/productos/huesoKong.jpg" />
                    <Card.Body>
                        <Card.Title className="card-title">Kong</Card.Title>
                        <Card.Text className="card-text">
                            Producto: Juguete
                            <br />
                            Precio: $ 10.000
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>

        </div>
    );
}

export default Productos;