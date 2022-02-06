import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazorComponent } from './blazor.component';

describe('BlazorComponent', () => {
  let component: BlazorComponent;
  let fixture: ComponentFixture<BlazorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
