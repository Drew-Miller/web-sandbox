import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { OriginalComponent } from 'src/app/blazor/original/original.component';

export default {
  title: 'Blazor/Main',
  component: OriginalComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story<OriginalComponent> = (args: OriginalComponent) => ({
  props: args
});

export const Original = Template.bind({});
