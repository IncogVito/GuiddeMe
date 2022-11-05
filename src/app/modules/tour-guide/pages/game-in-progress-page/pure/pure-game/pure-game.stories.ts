import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {PureGameComponent} from "./pure-game.component";
import {SbConventionHighestDivision} from "../../../../../../../../.storybook/storybook-naming-convention";
import {TogglePrimaryComponent} from "../../../../../shared/components/toggle-primary/toggle-primary.component";
import {PureGameStopListComponent} from "../pure-game-stop-list/pure-game-stop-list.component";
import {PureGameCurrentStopComponent} from "../pure-game-current-stop/pure-game-current-stop.component";

export default {
  component: PureGameComponent,
  title: SbConventionHighestDivision.Pages + '/Game',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [TogglePrimaryComponent, PureGameStopListComponent, PureGameCurrentStopComponent],
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
