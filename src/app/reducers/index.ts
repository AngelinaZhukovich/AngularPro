import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as formCart from './reducer.cart';

export interface AppState {
  cart: formCart.AppState
}

export const reducers: ActionReducerMap<AppState> = {
  cart: formCart.cartReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
