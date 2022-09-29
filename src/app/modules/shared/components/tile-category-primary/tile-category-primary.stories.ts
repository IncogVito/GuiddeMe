import {Meta, moduleMetadata, Story} from '@storybook/angular';

import { action } from '@storybook/addon-actions';
import {TileCategoryPrimaryComponent} from "./tile-category-primary.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";


export default {
  component: TileCategoryPrimaryComponent,
  title: 'Tile Category Primary',
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
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story = args => ({
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {};
