import { Component, EventEmitter, Input, Output } from '@angular/core';

export const sizes = ['XS', 'S', 'M', 'L', 'XL'];
export type Size =
  | 'XS'
  | 'S'
  | 'M'
  | 'L'
  | 'XL';

@Component({
  selector: 'simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export default class NameComponent {
  sizes = sizes;
  
  @Input()
  selectedSize: Size = 'XS';
  
  @Input()
  name: string = 'Classic Utillity Jacket';

  @Input()
  image: string = '/assets/simple-jacket.jpg';

  @Input()
  price: number = 110;

  @Input()
  inStock: boolean = true;

  @Input()
  isFavorite: boolean = false;

  @Output()
  addToFavorites = new EventEmitter<Event>();
  
  @Output()
  buyNow = new EventEmitter<Event>();

  @Output()
  addToBag = new EventEmitter<Event>();
}