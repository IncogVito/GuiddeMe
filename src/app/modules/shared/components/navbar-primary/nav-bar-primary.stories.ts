import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {NavBarPrimaryComponent} from "./nav-bar-primary.component";
import {HamburgerMenuComponent} from "../menu/hamburger-menu.component";


export default {
  component: NavBarPrimaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/NavBar Primary',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [
        HamburgerMenuComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
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
Default.args = {};
