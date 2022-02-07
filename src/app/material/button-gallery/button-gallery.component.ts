import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'material-button-gallery',
  templateUrl: './button-gallery.component.html',
  styleUrls: ['./button-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
