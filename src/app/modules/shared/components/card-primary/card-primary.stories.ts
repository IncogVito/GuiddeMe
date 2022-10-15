import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {CardPrimaryComponent} from "./card-primary.component";
import {CardSingleDetailModel} from "../../models/card-single-detail.model";


export default {
  component: CardPrimaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Card Primary',
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

const details: CardSingleDetailModel[] = [
  {
    icon: 'schedule',
    text: '120 minut'
  },
  {
    icon: 'grade',
    text: 'Other'
  },
  {
    icon: 'sports_esports',
    text: 'Quiz',
    colorStyle: '#fc7f03'
  },
]

export const Default = Template.bind({});
Default.args = {
  title: 'Card primary',
  imageUrl: 'assets/touristic-category.jpg',
  details
};
