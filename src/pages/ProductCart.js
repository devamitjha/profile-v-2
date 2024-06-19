import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCart = () => {
    const user = false;
    const navigate = useNavigate();
    const payNow = () => {
        if (user) {
            navigate('/shop/checkout/payment');
        } else {
            navigate('/login');
        }
    };
    return (
        <div>
            ProductCart
            <button onClick={payNow}>Proceed to Checkout</button>
        </div>
    )
}

export default ProductCart