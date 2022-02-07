import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blazor-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLinkComponent { }
