import React from 'react';

const CartList = ({ cart }) => {
    return (
        <ul>
            {cart.map(item =>
                <li key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                </li>)}
        </ul>
    )
}
export default CartList;