import { Component, HostBinding } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type NavLink = {
  name: string,
  link: string
};

type Theme = 'light' | 'dark';

const navLinkSource$ = new BehaviorSubject<NavLink[]>([
  { name: 'Item', link: 'https://www.google.com/'},
  { name: 'Item', link: 'https://www.google.com/'},
  { name: 'Item', link: 'https://www.google.com/'},
  { name: 'Item', link: 'https://www.google.com/'},
  { name: 'Item', link: 'https://www.google.com/'},
  { name: 'Item', link: 'https://www.google.com/'}
]).asObservable();

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  navLinks$ = navLinkSource$;

  @HostBinding('class') classTheme: Theme = 'light';

  get mode() {
    return this._mode;
  }
  set mode(v: Theme) {
    this.classTheme = this._mode = v;
  }
  private _mode: Theme = 'light';
}
