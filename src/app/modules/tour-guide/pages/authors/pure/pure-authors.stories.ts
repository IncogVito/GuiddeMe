import {
  SbConventionHighestDivision
} from "../../../../../../../.storybook/storybook-naming-convention";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon"
import {CardPrimaryComponent} from "../../../../shared/components/card-primary/card-primary.component";
import {ButtonPrimaryComponent} from "../../../../shared/components/button-primary/button-primary.component";
import {PureAuthorsComponent} from "./pure-authors.component";

export default {
  component: PureAuthorsComponent,
  title: SbConventionHighestDivision.Pages + '/ Authors',
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
Default.args = {
};
