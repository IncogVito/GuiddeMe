import {
  SbConventionHighestDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {PureToursComponent} from "../tours/pure-tours.component";
import {TileSecondaryComponent} from "../../../shared/components/tile-secondary/tile-secondary.component";
import {TourViewModel} from "../../models/tour.model";
import {ButtonPrimaryComponent} from "../../../shared/components/button-primary/button-primary.component";

export default {
  component: PureToursComponent,
  title: SbConventionHighestDivision.Pages + '/ Tours',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [TileSecondaryComponent, ButtonPrimaryComponent],
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
    imageUrl: '/assets/mapa.jpg'
  },
  {
    title: 'Tajemnice zamku królewskiego',
    time: 180,
    imageUrl: ''
  },
  {
    title: 'Kawiarniany szlak',
    time: 90,
    imageUrl: 'xxxxx'
  },
]

export const Default = Template.bind({});
Default.args = {
  pageTitle: 'Turystyka (3)',
  tours
};
