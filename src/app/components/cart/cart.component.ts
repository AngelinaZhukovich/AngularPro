import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart, addItemToCart, removeItemFromCart } from '../../actions/actions.cart';
import { AppState } from '../../reducers';
import { selectCartCount, selectCartItems } from '../../selectors/selectors.cart';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    address: new FormControl(''),
    paymentType: new FormControl('')
  });

  items$ = this.store.select(selectCartItems);
  cartAmount$ = this.store.select(selectCartCount);

  constructor(

    private store: Store<AppState>
  ) {
    // this.cartAmount$ = store.select('cart.amount')
  }

  ngOnInit(): void { }


  onSubmit() {
    let result = Object.assign(
      this.orderForm.value,
      // TO DO
      { items: [] }
    );
    console.log(result);
  }

  addOne(product: Product) {
    this.store.dispatch(addToCart());
    this.store.dispatch(addItemToCart(product));

    // this.items = this.items.map((el) => {
    //   if (el.id === id) {
    //     el.amount++;
    //   }
    //   return el;
    // });
    // this.cart.setItemsInCart(this.items);
  }
  removeOne(product: Product) {
    this.store.dispatch(removeFromCart());
    this.store.dispatch(removeItemFromCart(product));

    // removeOne(id: string | number) {
    // this.items = this.items.map((el) => {
    //   if (el.id === id) {
    //     el.amount--;
    //   }
    //   return el;
    // });
    // this.cart.setItemsInCart(this.items);
  }

}