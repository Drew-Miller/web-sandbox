// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import BrownFox from './brown-fox.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Brown-Fox',
  component: BrownFox,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
// const Template: Story<BrownFox> = (args: BrownFox) => ({
//   props: args,
// });

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = () => ({
  props: {
    label: 'Brown Fox',
    primary: true,
  },
});
