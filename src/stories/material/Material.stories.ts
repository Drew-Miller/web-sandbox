import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonGalleryComponent } from 'src/app/material/button-gallery/button-gallery.component';
import { MaterialComponent } from 'src/app/material/material.component';
import * as MaterialModule from 'src/app/material/material.module';

export default {
  title: 'Material/Main',
  component: MaterialComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonGalleryComponent],
      imports: [...MaterialModule.imports]
    })
  ]
} as Meta;

const Template: Story<MaterialComponent> = (args: MaterialComponent) => ({
  props: args
});

export const Primary = Template.bind({});