import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {

    const {img, name, price, quantity, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='products'>
            <img src={img} alt="ami rag koresi" />
            <div className='product-info'>
                <h6 className='products-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={ () => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Products;