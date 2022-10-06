import {
  SbConventionHighestDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {TileSecondaryComponent} from "../../../shared/components/tile-secondary/tile-secondary.component";
import {TourViewModel} from "../../models/tour.model";
import {ButtonPrimaryComponent} from "../../../shared/components/button-primary/button-primary.component";
import {IntroductionPageComponent} from "./introduction-page.component";

export default {
  component: IntroductionPageComponent,
  title: SbConventionHighestDivision.Pages + '/ Introduction',
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
Default.args = {};
