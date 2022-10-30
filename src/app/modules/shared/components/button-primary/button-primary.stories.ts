import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {ButtonPrimaryComponent} from "./button-primary.component";


export default {
  component: ButtonPrimaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Button Primary',
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
  label: 'Button primary',
  iconName: 'chevron_right'
};

export const ReversedColor = Template.bind({});
ReversedColor.args = {
  ...Default.args,
  reversedColor: true
};
