import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as Shopping from '../shopping';


@Component({
  selector: 'simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export default class NameComponent {
  @Input()
  product?: Shopping.Product;

  @Input()
  selectedSize!: Shopping.Size;

  @Output()
  addToFavorites = new EventEmitter<Event>();

  @Output()
  buyNow = new EventEmitter<Event>();

  @Output()
  addToBag = new EventEmitter<Event>();
}