// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import Shopping from 'src/app/shopping/shopping.component';
import { simpleJacket, kidsJumper, fancySuitJacket, retroShoe } from 'src/app/shopping/shopping';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Shopping/Shopping',
  component: Shopping,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIconModule, MatButtonModule],
    }),
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Shopping> = (args: Shopping) => ({
  props: args,
});

const Primary = Template.bind({});
Primary.args = {
  products: [simpleJacket, kidsJumper, fancySuitJacket, retroShoe]
}