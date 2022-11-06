import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {PureGameComponent} from "./pure-game.component";
import {SbConventionHighestDivision} from "../../../../../../../../.storybook/storybook-naming-convention";
import {TogglePrimaryComponent} from "../../../../../shared/components/toggle-primary/toggle-primary.component";
import {PureGameStopListComponent} from "../pure-game-stop-list/pure-game-stop-list.component";
import {PureGameCurrentStopComponent} from "../pure-game-current-stop/pure-game-current-stop.component";
import {TaskListComponent} from "../../../../../shared/components/task-list/task-list.component";
import {FooterPrimaryComponent} from "../../../../../shared/components/footer-primary/footer-primary.component";
import {ButtonPrimaryComponent} from "../../../../../shared/components/button-primary/button-primary.component";
import {
  ImageCarouselPrimaryComponent
} from "../../../../../shared/components/image-carousel-primary/image-carousel-primary.component";
import {
  HeaderTextPrimaryComponent
} from "../../../../../shared/components/header-text-primary/header-text-primary.component";
import {TourStopModel} from "../../../../models/tour-stop.model";

export default {
  component: PureGameComponent,
  title: SbConventionHighestDivision.Pages + '/Game',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [TogglePrimaryComponent,
        PureGameStopListComponent,
        PureGameCurrentStopComponent,
        TaskListComponent,
        FooterPrimaryComponent,
        ButtonPrimaryComponent,
        ImageCarouselPrimaryComponent,
        HeaderTextPrimaryComponent
      ],
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

const stopList: TourStopModel[] = [{
  id: '1',
  tourId: '1',
  name: 'Kościół Mariacki',
  descriptionHtml: 'Sed et gravida augue, quis porttitor lectus. Aenean sit amet blandit leo. Vestibulum egestas sed tellus eu imperdiet. Maecenas hendrerit blandit sollicitudin. Integer pretium est at mi facilisis ullamcorper. Integer lobortis lacinia libero, quis sodales felis dignissim eu. In rutrum id lorem at porta. Mauris tempor massa id enim posuere, quis aliquam enim efficitur.',
  mainImageUrl: 'assets/main-photo.jpg',
  imagesUrls: ['assets/main-photo.jpg', 'mapa.jpg'],
  address: 'ul. Rynek 19',
  orderIndex: 1
}, {
  id: '2',
  tourId: '2',
  name: 'Kamienica Hallera',
  descriptionHtml: 'Sed et gravida augue, quis porttitor lectus. Aenean sit amet blandit leo. Vestibulum egestas sed tellus eu imperdiet. Maecenas hendrerit blandit sollicitudin. Integer pretium est at mi facilisis ullamcorper. Integer lobortis lacinia libero, quis sodales felis dignissim eu. In rutrum id lorem at porta. Mauris tempor massa id enim posuere, quis aliquam enim efficitur.',
  mainImageUrl: 'assets/main-photo.jpg',
  imagesUrls: ['assets/main-photo.jpg', 'mapa.jpg'],
  address: 'ul. Rynek 88',
  orderIndex: 2
}, {
  id: '3',
  tourId: '3',
  name: 'Wawel',
  descriptionHtml: 'Sed et gravida augue, quis porttitor lectus. Aenean sit amet blandit leo. Vestibulum egestas sed tellus eu imperdiet. Maecenas hendrerit blandit sollicitudin. Integer pretium est at mi facilisis ullamcorper. Integer lobortis lacinia libero, quis sodales felis dignissim eu. In rutrum id lorem at porta. Mauris tempor massa id enim posuere, quis aliquam enim efficitur.',
  mainImageUrl: 'assets/main-photo.jpg',
  imagesUrls: ['assets/main-photo.jpg', 'mapa.jpg'],
  address: 'ul. Podzamcze 18',
  orderIndex: 3
}
];

export const Default = Template.bind({});
Default.args = {
  stopsList: stopList,
  currentStop: stopList[0],
  nextStop: stopList[1]
};
