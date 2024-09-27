import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            const product = action.payload;
            const existingProduct = state.cartItems.find(item => item.id === product.id);
            if(existingProduct){
                existingProduct.quantity += 1;
            }else{
                state.cartItems.push({...product,quantity:1});
            }
        },
        removeFromCart:(state,action)=>{
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
              item.quantity += 1;
            }
          },
          decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
          },
    },
});

export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity} = CartSlice.actions;
export default CartSlice.reducer;