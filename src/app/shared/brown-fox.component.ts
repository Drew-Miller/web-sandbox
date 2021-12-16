import { Component, Input } from "@angular/core"

enum FontFamily {
  SANS = 'font-sans',
  SERIF = 'font-serif',
  MONO = 'font-mono'
}

@Component({
  template: `
<div class="space-y-5" >
  <div class="p-3 bg-white shadow rounded-lg">
    <h3 class="text-xs border-b">font-sans</h3>
    <p [class.fontFamily]='fontFamily'>{{text}}</p>
  </div>
</div>
`,
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
  fontFamily: FontFamily = FontFamily.SANS;
}