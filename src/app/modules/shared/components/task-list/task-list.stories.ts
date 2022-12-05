import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {action} from '@storybook/addon-actions';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {TaskListComponent} from "./task-list.component";


export default {
  component: TaskListComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Task list',
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

export const actionsData = {
  onToggle: action('onToggle'),
  buttonClicked: action('buttonClicked')
};

const Template: Story = args => ({
  props: {
    ...args,
    onToggle: actionsData.onToggle,
    buttonClicked: actionsData.buttonClicked,
  },
});

export const Default = Template.bind({});
Default.args = {
  taskNames: ['Teatr Bagatela', 'Stare miasto', 'Piwnica pod baranami', 'Stradom', 'Wawel']
};

export const ActiveMiddle = Template.bind({});
ActiveMiddle.args = {
  ...Default.args,
  defaultActiveIndex: 2
};

export const AllFinished = Template.bind({});
AllFinished.args = {
  ...Default.args,
  defaultActiveIndex: 6
};

export const NoTasks = Template.bind({});
NoTasks.args = {
  taskNames: []
};
