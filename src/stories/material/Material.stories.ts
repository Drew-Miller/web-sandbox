import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MaterialComponent } from 'src/app/material/material.component';
import * as MaterialModule from 'src/app/material/material.module';

export default {
  title: 'Material/Main',
  component: MaterialComponent,
  decorators: [
    moduleMetadata({
      declarations: [...MaterialModule.declarations],
      imports: [...MaterialModule.imports]
    })
  ]
} as Meta;

const Template: Story<MaterialComponent> = (args: MaterialComponent) => ({
  props: args
});

export const Primary = Template.bind({});