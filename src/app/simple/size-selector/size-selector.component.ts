import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'size-selector',
  templateUrl: 'size-selector.component.html'
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

    this.selectedSizeChange.emit(this._selectedSize);
  }
  get selectedSize() {
    return this._selectedSize;
  }
  private _selectedSize: string = '';

  @Output()
  selectedSizeChange = new EventEmitter<string>();
}