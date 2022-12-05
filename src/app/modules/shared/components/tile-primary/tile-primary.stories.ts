import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TilePrimaryComponent} from "./tile-primary.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {ButtonPrimaryComponent} from "../button-primary/button-primary.component";
import {SkeletonLoaderComponent} from "../skeleton-loader/skeleton-loader.component";
import {SkeletonDirective} from "../../directives/skeleton.directive";


export default {
  component: TilePrimaryComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Tile Primary',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [ButtonPrimaryComponent, SkeletonDirective, SkeletonLoaderComponent],
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
  rightText: '1',
  buttonText: 'Turystyka',
  imageUrl: '../../../../../assets/main-photo.jpg'
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loadingInProgress: true
};
