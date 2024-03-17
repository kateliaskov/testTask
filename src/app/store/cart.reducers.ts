import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "./cart.actions";

export const initialState = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]')
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state: any, { item }) => {
    const updatedCart = [...state.cart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { ...state, cart: [...state.cart, item] };
  }),
  on(removeFromCart, (state: any, {itemId})=>{
    const updatedCart = state.cart.filter((el:any)=> el.id != itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { ...state, cart: updatedCart };
  })
)