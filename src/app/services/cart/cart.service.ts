import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemInCart: number = 0;
  private itemInCart$ = new BehaviorSubject<number>(0);

  public setItemsInCart (n?: number) {
    if (n) {
      this.itemsInCart = n;
    } else {
      this.itemsInCart++;
    }
    this.itemsInCart.next(this.itemsInCart);
  }

  public getSubscription (){
    return this.itemsInCart$;
  }

  constructor () {

  }

}
