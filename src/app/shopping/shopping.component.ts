import { Component, Input } from '@angular/core';
import * as Shopping from './shopping';
import * as Style from './style';

@Component({
  selector: 'shopping',
  templateUrl: 'shopping.component.html'
})
export default class ShoppingComponent {
  @Input()
  products!: Shopping.Product[];

  @Input()
  style!: Style.Style;
}