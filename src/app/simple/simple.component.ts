import { Component, EventEmitter, Input, Output } from '@angular/core';

export const sizes = ['XS', 'S', 'M', 'L', 'XL'];
export type Size = typeof sizes[number];

@Component({
  selector: 'simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export default class NameComponent {
  sizes = sizes;
  
  @Input()
  name: string = 'Classic Utillity Jacket';

  // TODO validate image path
  @Input()
  image: string = '/assets/simple-jacket.jpg';

  @Input()
  price: number | undefined = 110;

  @Input()
  inStock: boolean = true;

  @Input()
  selectedSize: Size = 'XS';

  @Output()
  favorite = new EventEmitter<Event>();
  
  @Output()
  buyNow = new EventEmitter<Event>();

  @Output()
  addToBag = new EventEmitter<Event>();
}