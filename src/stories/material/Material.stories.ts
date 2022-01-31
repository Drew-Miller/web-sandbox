import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from 'src/app/material/material.component';
import * as MaterialModule from 'src/app/material/material.module';

export default {
  title: 'Material/Main',
  component: MaterialComponent,
  decorators: [
    moduleMetadata({
      declarations: [...MaterialModule.declarations],
      imports: [...MaterialModule.imports, BrowserAnimationsModule]
    })
  ]
} as Meta;

const Template: Story<MaterialComponent> = (args: MaterialComponent) => ({
  props: args
});

export const Primary = Template.bind({});