import { Action, createReducer, on, State } from '@ngrx/store';
import { addItemToCart, addToCart, removeFromCart } from '../actions/actions.cart';
import { Product } from '../interfaces/product';
import { Product } from './../vjdfvk'

export interface cartState {
  amount: number,
  items: any[],
}

const cartState: cartState = {
  amount: 0,
  items: [],
};

const _cartReducer = createReducer(
  cartState,
  on(addToCart, (state: cartState) => ({ ...state, amount: state.amount + 1 })),
  on(removeFromCart, (state: cartState) => ({ ...state, amount: state.amount - 1 })),
  on (addItemToCart, (state: State, payload: Product)=>{
     return {
       ... state,
       items: cartState.items.push(payload)
     }
  })

);

export function cartReducer(state: State = cartState, action: Action) {
  return _cartReducer(state, action);
}