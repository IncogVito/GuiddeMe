import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {FooterPrimaryComponent} from "./footer-primary.component";
import {ButtonPrimaryComponent} from "../button-primary/button-primary.component";


export default {
  component: FooterPrimaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Footer primary',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [ButtonPrimaryComponent],
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
  additionalLabel: 'Next point',
  mainLabel: 'Kościół Mariacki',
  buttonLabel: 'Next'
};

export const OverflowText = Template.bind({});
OverflowText.args = {
  additionalLabel: 'Praesent vitae orci vitae augue lacinia feugiat. Pellentesque tellus ipsum',
  mainLabel: 'Praesent vitae orci vitae augue lacinia feugiat. Pellentesque tellus ipsum',
  buttonLabel: 'Praesent vitae orci vitae augue lacinia feugiat. Pellentesque tellus ipsum'
};
