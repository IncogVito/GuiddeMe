import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {TilePrimaryComponent} from "./tile-primary.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";


export default {
  component: TilePrimaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Tile Primary',
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
  text: 'Category first',
  iconName: 'highlight_off'
};
