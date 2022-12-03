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
import {ButtonSecondaryComponent} from "../button-secondary/button-secondary.component";
import {ButtonPrimaryComponent} from "../button-primary/button-primary.component";
import {CardSingleDetailModel} from "../../models/card-single-detail.model";


export default {
  component: TileSecondaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Tile Secondary',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [ButtonPrimaryComponent, ButtonSecondaryComponent],
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
  buttonText: 'See more',
  imageUrl: '/assets/mapa.jpg',
  mapImageUrl: '/assets/mapa.jpg',
  expanded: false
};

const singleDetails: CardSingleDetailModel[] = [
  {
    icon: 'map',
    text: '7 punktów',
  }, {
    icon: 'sports_esports',
    text: 'Quiz dostępny',
    colorStyle: 'orange'
  }]

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  expanded: true,
  details: singleDetails
};

export const MissingImage = Template.bind({});
MissingImage.args = {
  ...Default.args,
  expanded: true,
  imageUrl: 'notExisting'
};

export const OverflowingText = Template.bind({});
OverflowingText.args = {
  ...Default.args,
  mainLabel: 'Duis ornare metus vitae est euismod mattis. ' +
    'Praesent vitae orci vitae augue lacinia feugiat. Pellentesque tellus ipsum,' +
    ' lacinia in lorem ac',
  expanded: true,
  imageUrl: 'notExisting',
  mapImageUrl: 'notExisting'
};
