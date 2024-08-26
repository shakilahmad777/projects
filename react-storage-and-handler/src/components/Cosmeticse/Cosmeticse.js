import React from 'react';
import './Cosmeticse.css'

const Cosmeticse = () => {
    const cosmeticProduct = [{
        name: "Radiant Glow Moisturizer",
        brand: "Beauty Bliss",
        category: "Skincare",
        price: 29.99,
        weight: "50ml",
}];

    return (
        <div>
            {
                cosmeticProduct.map(product => {
                    let {name, brand, category, price, weight} = product
                    return <div className='cosmetic-product'>
                       <li>Name : {name}</li>
                       <li>Brand : {brand}</li>
                       <li>Category : {category}</li>
                       <li>Price : {price}</li>
                       <li>Weight : {weight}</li>
                    </div>
                })
            }
        </div>
    );
};

export default Cosmeticse;