import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Products = ({ products }) => {
    // console.log(products)
    return (
        <div>
            <h1>WorkShop F1</h1>
            <div className="d-flex justify-content-around">
                {products.map((product, index) => <Card style={{ width: '18rem' }} key={index}>
                    <Card.Img variant="top" src={product.imgSrc} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                        <Link to={`/products/${product.id}`}><Button variant="primary">See price</Button></Link>
                    </Card.Body>
                </Card>)}
            </div>
        </div>
    )
}

export default Products
