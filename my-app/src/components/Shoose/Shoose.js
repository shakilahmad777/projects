import React from 'react';
import add from '../../utilitise/calculate';
import './Shoose.css'

const Shoose = () => {
    const first = 54;
    const second = 299;
    const total = add(first, second)

    // this object of Product Shoes //
    const shoesProductList = [
        {
          id: 1,
          name: "Nike Air Max 270",
          brand: "Nike",
          price: 150.00,
          size: [7, 8, 9, 10, 11],
          color: "Black/White",
          inStock: true,
          description: "The Nike Air Max 270 is inspired by two icons of big Air: the Air Max 180 and Air Max 93.",
          imageUrl: "https://example.com/nike-air-max-270.jpg"
        },
        {
          id: 2,
          name: "Adidas Ultraboost 21",
          brand: "Adidas",
          price: 180.00,
          size: [6, 7, 8, 9, 10],
          color: "Core Black",
          inStock: false,
          description: "The Adidas Ultraboost 21 provides incredible energy return and comfort with every stride.",
          imageUrl: "https://example.com/adidas-ultraboost-21.jpg"
        },
        {
          id: 3,
          name: "Puma Suede Classic",
          brand: "Puma",
          price: 65.00,
          size: [6, 7, 8, 9, 10, 11, 12],
          color: "Navy Blue",
          inStock: true,
          description: "The Puma Suede Classic features a sleek, timeless design with premium suede leather.",
          imageUrl: "./Img/windows_pro.jpg"
        },
        {
          id: 4,
          name: "New Balance 990v5",
          brand: "New Balance",
          price: 175.00,
          size: [8, 9, 10, 11, 12],
          color: "Grey",
          inStock: true,
          description: "The New Balance 990v5 blends a perfect mix of cushioning and stability.",
          imageUrl: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1915343812.jpg"
        }
    ];   
      
      const shoesList = shoesProductList.map(shoes => {
        return <div className='shoes-list'>
          <p className=''>ID : {shoes.id} Name : {shoes.name.toUpperCase()} Brand :{shoes.brand} Price : {shoes.price.toFixed(2)} Size : {shoes.size.join(",")} Color : {shoes.color}</p>
        </div>
      })

    return (
        <div className=''>
            <p className='shoes-compo'>
              {
                shoesList
              }
            </p>
        </div>
    )
};

export default Shoose;