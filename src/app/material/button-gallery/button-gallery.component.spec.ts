import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGalleryComponent } from './button-gallery.component';

describe('ButtonGalleryComponent', () => {
  let component: ButtonGalleryComponent;
  let fixture: ComponentFixture<ButtonGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
