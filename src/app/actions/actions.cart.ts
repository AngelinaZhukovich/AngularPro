import { createAction } from '@ngrx/store';

export const addToCart = createAction('addToCart');
export const removeFromCart = createAction('removeFromCart');
export const addItemToCart = createAction ('addItemToCart');