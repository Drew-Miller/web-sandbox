import { Component, HostBinding, OnInit } from '@angular/core';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  @HostBinding('class') className = 'light';

  get mode() {
    return this._mode;
  }
  set mode(v: Theme) {
    this.className = this._mode = v;
  }
  private _mode: Theme = 'light';
}
