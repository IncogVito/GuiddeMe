import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {ButtonSecondaryComponent} from "./button-secondary.component";


export default {
  component: ButtonSecondaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Button Secondary',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule
      ],
    }),
  ],

} as Meta;

const Template: Story = args => ({
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button secondary'
};
