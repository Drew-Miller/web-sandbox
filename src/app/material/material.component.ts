import { Component, HostBinding, OnDestroy } from '@angular/core';
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
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnDestroy {
  navLinks$: Observable<NavLink[]> = navLinkSource$;

  @HostBinding('class') classTheme: Theme = 'light';

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

  private _destroying$ = new Subject<void>();

  constructor() {
    fromEvent(window, 'resize').pipe(
      tap((evt: Event) => {
        this.mode = 1000 < window.innerWidth ? 'over' : 'side';
      }),
      takeUntil(this._destroying$)
    ).subscribe();
  }

  ngOnDestroy() {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
