import React from 'react';
import './Products.css'

const Products = (props) => {
    console.log(props.product)
    const {img, name, price, quantity, seller, ratings} = props.product;
    return (
        <div className='products'>
            <img src={img} alt="ami rag koresi" />
            <div className='product-info'>
                <h6 className='products-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} Stars</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Products;