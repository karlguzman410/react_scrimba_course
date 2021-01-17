import React from 'react'
import productsData from './productsData'
import { Link } from 'react-router-dom'

function Products() {

    const productsList = productsData.map(product => (
        <div key={product.id}>
            <h5 >
                <Link to={`/products/${product.id}`}>$ {product.price} - {product.name}</Link>
            </h5>
            <p>{product.description}</p>
            <hr />
        </div>

    ))

    return (
        <div>
            <h1>Products</h1>
            {productsList}
        </div>
    )
}

export default Products
