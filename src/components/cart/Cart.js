import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>order-summary</h2>
                <p>{cart.length}</p>
        </div>
    );
};

export default Cart;