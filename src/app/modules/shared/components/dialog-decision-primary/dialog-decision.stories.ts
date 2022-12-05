import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {DialogDecisionPrimaryComponent} from "./dialog-decision-primary.component";
import {DialogDecisionPrimaryWrapperComponent} from "./dialog-decision-primary-wrapper.component";
import {ButtonPrimaryComponent} from "../button-primary/button-primary.component";
import {MatDialogModule} from "@angular/material/dialog";


export default {
  component: DialogDecisionPrimaryWrapperComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Dialog decision primary',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [DialogDecisionPrimaryComponent, ButtonPrimaryComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDialogModule
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
  headerTitle: 'Czy chcesz kontunuować z Quizem',
  htmlText: 'Quiz zawsze możesz wyłączyć w trakcie rozgrywki',
  rejectButtonLabel: 'Bez quizu',
  acceptButtonLabel: 'Z quizem'
};
