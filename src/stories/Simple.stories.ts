// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import Simple from 'src/app/shopping/simple/simple.component';
import SizeSelector from 'src/app/shopping/simple/size-selector/size-selector.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Simple',
  component: Simple,
  decorators: [
    moduleMetadata({
      declarations: [SizeSelector],
      imports: [CommonModule, MatIconModule, MatButtonModule],
    }),
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Simple> = (args: Simple) => ({
  props: args,
});

export const Primary = Template.bind({});
