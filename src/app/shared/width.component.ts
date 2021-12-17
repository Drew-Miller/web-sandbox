import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

// All available width classes
type Widths =
  | 'w-0'
  | 'w-px'
  | 'w-0.5'
  | 'w-1'
  | 'w-1.5'
  | 'w-2'
  | 'w-2.5'
  | 'w-3'
  | 'w-3.5'
  | 'w-4'
  | 'w-5'
  | 'w-6'
  | 'w-7'
  | 'w-8'
  | 'w-9'
  | 'w-10'
  | 'w-11'
  | 'w-12'
  | 'w-14'
  | 'w-16'
  | 'w-18'
  | 'w-20'
  | 'w-24'
  | 'w-28'
  | 'w-32'
  | 'w-36'
  | 'w-40'
  | 'w-44'
  | 'w-48'
  | 'w-52'
  | 'w-56'
  | 'w-60'
  | 'w-64'
  | 'w-72'
  | 'w-80'
  | 'w-96'
  | 'w-auto'
  | 'w-1/2'
  | 'w-1/3'
  | 'w-2/3'
  | 'w-1/4'
  | 'w-2/4'
  | 'w-3/4'
  | 'w-1/5'
  | 'w-2/5'
  | 'w-3/5'
  | 'w-4/5'
  | 'w-1/6'
  | 'w-2/6'
  | 'w-3/6'
  | 'w-4/6'
  | 'w-5/6'
  | 'w-1/12'
  | 'w-2/12'
  | 'w-3/12'
  | 'w-4/12'
  | 'w-5/12'
  | 'w-6/12'
  | 'w-7/12'
  | 'w-8/12'
  | 'w-9/12'
  | 'w-10/12'
  | 'w-11/12'
  | 'w-full'
  | 'w-screen'
  | 'w-min'
  | 'w-max'
  | 'w-fit';
  
@Component({
  selector: 'width',
  template: `<div class="space-y-4">
  <div class="{{width}} h-6 origin-left bg-white border-gray-500 ring-1 ring-gray-700/5 px-1 flex items-center shadow-xl" style="border-radius: 4px; transform: none;">
    <span class="flex-auto text-center text-gray-500 text-xs">{{width}}</span>
  </div>
</div>`
})
export default class WidthComponent {
  @Input()
  width: Widths = 'w-96';
}

function clamp(v: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}