import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Products 
                            key={product.id}
                            product={product}
                            handleAddToCart = {handleAddToCart}
                            ></Products>)
                    }
                </div>
                <div className="order-container">
                    <h2>Order Summary</h2>
                    <p>Select Items: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;