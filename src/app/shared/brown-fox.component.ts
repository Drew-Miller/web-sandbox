import { Component, Input } from "@angular/core"

type FontFamily =
  | 'font-sans'
  | 'font-serif'
  | 'font-mono';

@Component({
  selector: 'brown-fox',
  template: `<div class="space-y-5" >
  <div class="p-3 bg-white shadow rounded-lg">
    <h3 class="text-xs leading-5 font-mono pb-2 border-b border-gray-100">font-sans</h3>
    <p class="mt-2 sm:mt-3 lg:mt-2 xl:mt-3 text-gray-700 text-sm leading-6 lg:leading-6"
      [class.font-serif]="isSerif"
      [class.font-sans]="isSans"
      [class.isMono]="isMono"
      [ngClass]="{
        fontFamily: true,
        'sm:text-lg lg:text-sm xl:text-lg': !isMono,
        'sm:leading-7 xl:leading-7': isMono
      }" 
    >{{text}}</p>
  </div>
</div>`,
  styleUrls: ['./brown-fox.component.scss']
})
export default class BrownFoxComponent {
  /**
   * What text should the paragraph display?
   */
  @Input()
  text = 'The quick brown fox jumps over the lazy dog.';
  
  /**
   * What font family should the text be?
   */
  @Input()
  fontFamily: FontFamily = 'font-sans';

  get isSans() {
    return this.fontFamily === 'font-sans';
  }

  get isSerif() {
    return this.fontFamily === 'font-serif';
  }

  get isMono() {
    return this.fontFamily === 'font-mono';
  }
}