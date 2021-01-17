import React from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import productsData from './productsData'
import Button from '@material-ui/core/Button'

function ProductDetails() {

    const { productId } = useParams()
    const product = productsData.find(prod => prod.id === productId)

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Description : {product.description}</p>
            <Button variant="contained" color="primary" component={Link} to='/products'>Go back to Products</Button>
        </div>
    )
}

export default ProductDetails
