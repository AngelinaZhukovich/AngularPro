import {createSelector} from '@ngrx/store';
import {AppState} from '../reducers/index';
import { State } from '../reducers/reducer.cart';

 const selectCartFeature = (state: AppState) => state.cart;

 export const selectCartCount = createSelector (
    createSelector,
    (state: State) => state.amount
 )

 export const selectCartItems = createSelector (
    createSelector,
    (state: State) => state.items
 )