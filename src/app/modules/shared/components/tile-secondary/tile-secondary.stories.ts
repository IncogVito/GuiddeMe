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
import {ButtonPrimaryComponent} from "../button-primary/button-primary.component";


export default {
  component: TileSecondaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Tile Secondary',
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

export const actionsData = {
  onToggle: action('onToggle'),
  buttonClicked: action('buttonClicked')
};

const Template: Story = args => ({
  props: {
    ...args,
    onToggle: actionsData.onToggle,
    buttonClicked: actionsData.buttonClicked,
  },
});

export const Default = Template.bind({});
Default.args = {
  mainLabel: 'Category first',
  topRightIcon: 'expand_less',
  descriptionIcon: 'schedule',
  descriptionText: '120 min',
  imageUrl: '/assets/mapa.jpg',
  expanded: false
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  expanded: true
};

export const MissingImage = Template.bind({});
MissingImage.args = {
  ...Default.args,
  expanded: true,
  imageUrl: 'notExisting'
};
