import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlazorComponent } from 'src/app/blazor/blazor.component';
import * as BlazorModule from 'src/app/blazor/blazor.module';

export default {
  title: 'Blazor/Main',
  component: BlazorComponent,
  decorators: [
    moduleMetadata({
      declarations: [...BlazorModule.declarations],
      imports: [...BlazorModule.imports, BrowserAnimationsModule]
    })
  ]
} as Meta;

const Template: Story<BlazorComponent> = (args: BlazorComponent) => ({
  props: args
});

export const Primary = Template.bind({});