import { Component, Input } from '@angular/core';

@Component({
  selector: 'size-selector',
  templateUrl: 'size-selector.component.html',
  styles: [],
  host: {
    class: 'flex text-sm space-x-3'
  }
})
export default class SizeSelectorComponent {
  @Input()
  sizes: string[] = ['N/A'];

  @Input()
  set selectedSize(value: string) {
    if (this.sizes.indexOf(value) > -1) {
      this._selectedSize = value;
    } else {
      this._selectedSize = this.sizes[0];
    }
  }
  get selectedSize() {
    return this._selectedSize;
  }
  private _selectedSize: string = '';
}