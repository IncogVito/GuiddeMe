import {TilePrimaryComponent} from "../../../shared/components/tile-primary/tile-primary.component";
import {
  SbConventionHighestDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {PureCategoriesComponent} from "./pure/pure-categories.component";
import {CategoryViewModel} from "../../models/category.model";

export default {
  component: PureCategoriesComponent,
  title: SbConventionHighestDivision.Pages + '/ Categories',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [TilePrimaryComponent],
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


const categories: CategoryViewModel[] = [
  {
    id: '21',
    name: 'Turystyka',
    toursCount: 14,
    imageUrl: '/assets/mapa.jpg'
  },
  {
    id: '12',
    name: 'Coffee places',
    toursCount: 22,
    imageUrl: '/assets/main-photo.jpg'
  },
]

export const Default = Template.bind({});
Default.args = {
  categories
};
