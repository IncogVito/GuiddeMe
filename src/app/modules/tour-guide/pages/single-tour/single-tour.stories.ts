import {
  SbConventionHighestDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon"
import {SingleTourComponent} from "./single-tour.component";
import {CardPrimaryComponent} from "../../../shared/components/card-primary/card-primary.component";
import {NavbarScrollComponent} from "../../../shared/components/navbar-scroll/navbar-scroll.component";
import {VisibleDirective} from "../../../shared/directives/visible.directive";
import {OffsetFixedActivityDirective} from "../../../shared/directives/offset-fixed-activity.directive";
import {ButtonPrimaryComponent} from "../../../shared/components/button-primary/button-primary.component";

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
      declarations: [
        CardPrimaryComponent,
        NavbarScrollComponent,
        VisibleDirective,
        OffsetFixedActivityDirective,
        ButtonPrimaryComponent
      ]
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
