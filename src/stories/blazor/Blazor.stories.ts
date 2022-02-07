import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { BlazorComponent } from 'src/app/blazor/blazor.component';
import * as BlazorModule from 'src/app/blazor/blazor.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Blazor/Main',
  component: BlazorComponent,
  decorators: [
    moduleMetadata({
      declarations: [...BlazorModule.declarations],
      imports: [...BlazorModule.imports, MatIconModule, BrowserAnimationsModule]
    })
  ]
} as Meta;

const Template: Story<BlazorComponent> = (args: BlazorComponent) => ({
  props: args
});

export const Primary = Template.bind({});