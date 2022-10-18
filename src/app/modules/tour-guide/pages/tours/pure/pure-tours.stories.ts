import {
  SbConventionHighestDivision
} from "../../../../../../../.storybook/storybook-naming-convention";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {PureToursComponent} from "./pure-tours.component";
import {TileSecondaryComponent} from "../../../../shared/components/tile-secondary/tile-secondary.component";
import {TourViewModel} from "../../../models/tour.model";
import {ButtonSecondaryComponent} from "../../../../shared/components/button-secondary/button-secondary.component";

export default {
  component: PureToursComponent,
  title: SbConventionHighestDivision.Pages + '/ Tours',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [TileSecondaryComponent, ButtonSecondaryComponent],
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


const tours: TourViewModel[] = [
  {
    title: 'Smok wawelski',
    time: 120,
    imageUrl: '/assets/mapa.jpg',
    expanded: false
  },
  {
    title: 'Tajemnice zamku królewskiego',
    time: 180,
    imageUrl: '',
    expanded: false
  },
  {
    title: 'Kawiarniany szlak',
    time: 90,
    imageUrl: 'xxxxx',
    expanded: false
  },
]

export const Default = Template.bind({});
Default.args = {
  pageTitle: 'Turystyka (3)',
  backgroundImageUrl: 'touristic-category.jpg',
  tours
};
