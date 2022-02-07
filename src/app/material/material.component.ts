import { Component, HostBinding, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

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
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnDestroy {
  @HostBinding('class') classTheme: Theme = 'light';

  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;

  navLinks$: Observable<NavLink[]>;

  get mode() {
    return this._mode;
  }
  set mode(v: 'side' | 'over') {
    this._mode = v;
  }
  private _mode: 'side' | 'over' = 'side';

  get theme() {
    return this._theme;
  }
  set theme(v: Theme) {
    this.classTheme = this._theme = v;
  }
  private _theme: Theme = 'light';

  private readonly _destroying$ = new Subject<void>();

  constructor() {
    this.navLinks$ = navLinkSource$;

    fromEvent(window, 'resize').pipe(
      tap((evt: Event) => {
        if (window.innerWidth < 1000) {
          this.mode = 'over';
          this.sideNav.toggle(false)
        } else {
          this.mode = 'side';
        }
      }),
      takeUntil(this._destroying$)
    ).subscribe();
  }

  ngOnDestroy() {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
