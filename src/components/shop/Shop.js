import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    const clickcart =(product)=>{
        console.log(clickcart)
        const newcart = [...cart, product];
        setCart(newcart);
        
    }
    return (
        <div className='shop'>
            <div className='product-container'>
            
            {
                products.map(product => <Product key={product.id} product={product} clickcart={clickcart}></Product>)
            }
            </div>
            <div className='order-summary'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;