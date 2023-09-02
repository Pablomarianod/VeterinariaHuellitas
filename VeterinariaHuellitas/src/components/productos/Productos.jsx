import "./productos.css";
import { useContext } from "react";
import { ProductosContexto } from "../context/ProductosContext";
import { Button, Card } from 'react-bootstrap';

const Productos = () => {
    const { productos } = useContext(ProductosContexto);

    console.log(productos, "prueba");

    return (
        <div className="product-container col-12">
            <h1>Productos Destacados</h1>
            {productos === undefined ? (
                <h1>Sin productos</h1>
            ) : (
                <div className="product-cards-container">
                    {productos.map((producto) => (
                        <Card key={producto.id} className="product-card">
                            <Card.Img variant="top" src={producto.img} />
                            <Card.Body>
                                <Card.Title className="card-title">{producto.marca}</Card.Title>
                                <Card.Text className="card-text">
                                    Producto: {producto.tipo}
                                    <br />
                                    Precio: ${producto.precio}
                                </Card.Text>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Productos;