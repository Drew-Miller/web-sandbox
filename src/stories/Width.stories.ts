// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import Width from 'src/app/shared/width.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Width',
  component: Width,
  decorators: [
    moduleMetadata({

    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Width> = (args: Width) => ({
  props: args,
});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
export const w96 = Template.bind({});
w96.args = {
  width: 'w-96'
};
