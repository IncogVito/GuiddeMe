import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {action} from '@storybook/addon-actions';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {TileSecondaryComponent} from "./tile-secondary.component";


export default {
  component: TileSecondaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Tile Secondary',
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

export const actionsData = {
  onExpand: action('onExpand')
};

const Template: Story = args => ({
  props: {
    ...args,
    onExpand: actionsData.onExpand
  },
});

export const Default = Template.bind({});
Default.args = {
  leftLabel: 'Category first',
  rightLabel: '4h',
  contentText: 'Good trip',
  expanded: false
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  expanded: true
};
