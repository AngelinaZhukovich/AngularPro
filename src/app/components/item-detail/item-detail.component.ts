import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../services/catalog/catalog.service';

import { Store } from '@ngrx/store';
import { addItemToCart, addToCart } from '../../actions/actions.cart';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  id!: string;
  details!: any;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,

    private store: Store,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.catalogService.searchById(this.id).subscribe((data) => {
      this.details = data;
    });
  }

  addItemToCart(product: any) {
    this.store.dispatch(addItemToCart(product));
    this.store.dispatch(addToCart());
  }

}