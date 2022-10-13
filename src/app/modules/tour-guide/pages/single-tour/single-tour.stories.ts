import {
  SbConventionHighestDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon"
import {SingleTourComponent} from "./single-tour.component";

export default {
  component: SingleTourComponent,
  title: SbConventionHighestDivision.Pages + '/ SingleTour',
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
