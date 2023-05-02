import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {product, clickcart} = props;
   const {name, price, ratings,img} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Rattings: {ratings}</p>
            </div>
            <button onClick={()=> clickcart(product)} className='product-btn'>
                <p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                
            </button>
        </div>
    );
};

export default Product;