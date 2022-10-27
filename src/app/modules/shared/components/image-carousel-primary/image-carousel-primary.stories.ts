import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {ImageCarouselPrimaryComponent} from "./image-carousel-primary.component";


export default {
  component: ImageCarouselPrimaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Photo Carousel',
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
  images: [
    'assets/main-photo.jpg',
    'assets/mapa.jpg',
    'assets/touristic-category.jpg',
    'assets/main-photo.jpg',
    'assets/mapa.jpg',
    'assets/touristic-category.jpg',
    'assets/main-photo.jpg',
    'assets/mapa.jpg',
    'assets/touristic-category.jpg',
  ],
  defaultOffset: 0
};
