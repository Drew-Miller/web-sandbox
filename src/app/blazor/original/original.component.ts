import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./bootstrap.min.css', './original.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OriginalComponent {
  navCollpase = true;
}
