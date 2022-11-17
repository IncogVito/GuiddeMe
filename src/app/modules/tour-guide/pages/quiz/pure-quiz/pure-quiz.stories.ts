import {
  SbConventionHighestDivision
} from "../../../../../../../.storybook/storybook-naming-convention";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {PureQuizComponent} from "./pure-quiz.component";
import {ButtonPrimaryComponent} from "../../../../shared/components/button-primary/button-primary.component";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";

export default {
  component: PureQuizComponent,
  title: SbConventionHighestDivision.Pages + '/ Quiz - Modal',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [ButtonPrimaryComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatRadioModule,
        FormsModule
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
  questionText: 'Ile jest okien w wieży ratuszowej ?',
  availableResponses: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4'
  ]
};

export const OnlyTwoOptions = Template.bind({});
OnlyTwoOptions.args = {
  questionText: 'Ile jest okien w wieży ratuszowej ?',
  availableResponses: [
    'Option 1',
    'Option 2'
  ]
};

export const BigQuestion = Template.bind({});
BigQuestion.args = {
  questionText: 'ed et gravida augue, quis porttitor lectus. Aenean sit amet blandit leo. Vestibulum egestas sed tellus eu imperdiet. Maecenas hendrerit blandit sollicitudin. Integer pretium est at m ' +
    'gravida augue, quis porttitor lectus. Aenean sit amet blandit leo. Vestibulum egestas sed tellus eu imperdiet. Maecenas hendrerit blandit sollicitudin. Integer ' +
    '?',
  availableResponses: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4'
  ]
};

export const LongResponse = Template.bind({});
LongResponse.args = {
  questionText: 'Ile jest okien w wieży ratuszowej ?',
  availableResponses: [
    'Quis porttitor lectus. Aenean sit amet blandit leo quis porttitor lectus. Aenean sit amet blandit leo',
    'Option 2',
    'Option 3',
    ' Vestibulum egestas sed tellus eu imperdiet.'
  ]
};
