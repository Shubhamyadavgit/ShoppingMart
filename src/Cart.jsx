import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from './Slices/CartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalCartValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id,quantity) => {
        if(quantity > 1){
            dispatch(decreaseQuantity(id));
        }else{
            handleRemoveFromCart(id);
        }
    };

    return (
        <div className="cart-container">
            <div className="cart-left">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4>{item.title}</h4>
                                    <p>Vendor: {item.vendor}</p>
                                    <p>
                                        Quantity: 
                                        <div className="cart-buttons">
                                            <button onClick={() => handleDecreaseQuantity(item.id,item.quantity)} className="quantity-button">-</button>
                                            {item.quantity}
                                            <button onClick={() => handleIncreaseQuantity(item.id)} className="quantity-button">+</button>
                                        </div>
                                    </p>
                                </div>
                                <div className="cart-item-price">
                                    <p className='price-cart'>Price: ₹{item.compare_at_price}</p>
                                    <p className="offer-price">Offer Price: ₹{item.price}</p>
                                </div>
                                <button onClick={() => handleRemoveFromCart(item.id)} className="remove-button">Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="total">
                    <p>Subtotal: ₹{totalCartValue} ({totalQuantity} item{totalQuantity !== 1 ? 's' : ''})</p>
                </div>
            </div>
            <div className="cart-right">
                <h2>Total Cart Value</h2>
                <p>Subtotal : ₹{totalCartValue} ({totalQuantity} item{totalQuantity !== 1 ? 's' : ''})</p>
                <button>Proceed to buy</button>
            </div>
        </div>
    );
};

export default Cart;
