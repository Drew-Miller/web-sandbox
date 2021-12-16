// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import BrownFox from 'src/app/shared/brown-fox.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Brown-Fox',
  component: BrownFox,
  decorators: [
    moduleMetadata({

    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<BrownFox> = (args: BrownFox) => ({
  props: args,
});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
export const Sans = Template.bind({});
Sans.args = {
  fontFamily: 'font-sans'
};

export const Serif = Template.bind({});
Serif.args = {
  fontFamily: 'font-serif'
};

export const Mono = Template.bind({});
Mono.args = {
  fontFamily: 'font-mono'
};