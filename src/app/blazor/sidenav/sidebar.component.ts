import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'blazor-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': `
      sidebar
      block
      sticky top-0`
  }
})
export class SidebarComponent {
  @Input()
  title: string = "MyBlazorApp";

  collapse: boolean = true;
}
