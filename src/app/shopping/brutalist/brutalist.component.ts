import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as Shopping from '../shopping';


@Component({
  selector: 'brutalist',
  templateUrl: './brutalist.component.html',
  styleUrls: ['./brutalist.component.scss']
})
export default class BrutalistComponent {
  @Input()
  product!: Shopping.Product;

  @Input()
  selectedSize!: Shopping.Size;

  @Output()
  addToFavorites = new EventEmitter<Event>();

  @Output()
  buyNow = new EventEmitter<Event>();

  @Output()
  addToBag = new EventEmitter<Event>();
}