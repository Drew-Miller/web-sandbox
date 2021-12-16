import { Component, Input, Output, EventEmitter } from '@angular/core';
import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';

type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'storybook-button',
  template: `<button
    type="button"
    (click)="onClick.emit($event)"
    class="storybook-button"
    [ngClass]="{
      'storybook-button--primary': primary,
      'storybook-button--secondary': !primary,
      'storybook-button--small': size === 'small',
      'storybook-button--medium': size === 'medium',
      'storybook-button--large': size === 'large'
    }"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.component.scss'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  get primary() {
    return this._primary;
  }
  set primary(value: BooleanInput) {
    this._primary = coerceBooleanProperty(value);
  }
  private _primary: boolean = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: ButtonSize = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();
}
