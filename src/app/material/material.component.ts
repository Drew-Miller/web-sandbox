import { Component, HostBinding, OnInit } from '@angular/core';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  @HostBinding('class') className = 'light-mode';

  get mode() {
    return this._mode;
  }
  set mode(v: Theme) {
    this._mode = v;
    this.className = `${v}-mode`;
  }
  private _mode: Theme = 'light';
}
