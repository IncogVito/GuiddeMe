import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../.storybook/storybook-naming-convention";
import {NavbarScrollComponent} from "./navbar-scroll.component";
import {NavItemModel} from "../../models/nav-item.model";
import {AddClassOnVisibleDirective} from "../../directives/add-class-on-visible.directive";


export default {
  component: NavbarScrollComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Navigation Bar Scroll',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [AddClassOnVisibleDirective],
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

const navigationList: NavItemModel[] = [{
  title: 'First',
  content: "Aenean elementum accumsan tellus vel bibendum. Ut rhoncus pulvinar justo, sed porttitor enim hendrerit ac. Aliquam ut mauris arcu. Mauris blandit, ipsum vitae blandit dignissim, purus tellus convallis ante, mattis lobortis mauris neque sed diam. Suspendisse scelerisque orci eget ante consectetur, id placerat nisi placerat. Aenean mi eros, semper vel quam eu, fermentum eleifend odio. Quisque vitae vulputate tortor. Fusce ut nibh at est blandit venenatis nec venenatis nunc. Etiam eget iaculis nisi. Sed aliquam diam eget justo aliquam, sed placerat velit pellentesque.\n" +
    "\n" +
    "Nullam malesuada et orci quis fringilla. Nam libero risus, efficitur nec sodales vitae, viverra quis enim. Pellentesque cursus elit turpis, sit amet suscipit augue facilisis at. Nulla volutpat lectus nec elit posuere rhoncus. Mauris porttitor libero augue, vel tincidunt nibh ornare eget. Phasellus eget dui vitae neque faucibus sodales eget quis quam. Sed pretium sapien molestie turpis elementum tincidunt. Quisque a velit porttitor, scelerisque purus ut, malesuada metus. Nulla ut placerat lectus. Suspendisse potenti. Cras dignissim nunc nec volutpat accumsan. Sed eu sapien tellus. Suspendisse pharetra varius scelerisque. Vivamus ante diam, bibendum non justo at, accumsan dapibus metus. Suspendisse porta lectus lacus, vitae iaculis nisl hendrerit a. Vestibulum nulla sapien, tristique id imperdiet id, tempor eu dolor."

},{
  title: 'Second',
  content: "Aenean elementum accumsan tellus vel bibendum. Ut rhoncus pulvinar justo, sed porttitor enim hendrerit ac. Aliquam ut mauris arcu. Mauris blandit, ipsum vitae blandit dignissim, purus tellus convallis ante, mattis lobortis mauris neque sed diam. Suspendisse scelerisque orci eget ante consectetur, id placerat nisi placerat. Aenean mi eros, semper vel quam eu, fermentum eleifend odio. Quisque vitae vulputate tortor. Fusce ut nibh at est blandit venenatis nec venenatis nunc. Etiam eget iaculis nisi. Sed aliquam diam eget justo aliquam, sed placerat velit pellentesque.\n" +
    "\n" +
    "Nullam malesuada et orci quis fringilla. Nam libero risus, efficitur nec sodales vitae, viverra quis enim. Pellentesque cursus elit turpis, sit amet suscipit augue facilisis at. Nulla volutpat lectus nec elit posuere rhoncus. Mauris porttitor libero augue, vel tincidunt nibh ornare eget. Phasellus eget dui vitae neque faucibus sodales eget quis quam. Sed pretium sapien molestie turpis elementum tincidunt. Quisque a velit porttitor, scelerisque purus ut, malesuada metus. Nulla ut placerat lectus. Suspendisse potenti. Cras dignissim nunc nec volutpat accumsan. Sed eu sapien tellus. Suspendisse pharetra varius scelerisque. Vivamus ante diam, bibendum non justo at, accumsan dapibus metus. Suspendisse porta lectus lacus, vitae iaculis nisl hendrerit a. Vestibulum nulla sapien, tristique id imperdiet id, tempor eu dolor."
},{
  title: 'Third',
  content: "Aenean volutpat, ligula id hendrerit tempor, mi felis suscipit sem, nec egestas tellus odio a nisl. Curabitur a accumsan ipsum, eget tempor orci. Mauris efficitur velit velit, ut rutrum nisl mollis in. Aenean vulputate mattis egestas. Sed maximus velit ac tincidunt tincidunt. Vestibulum sed lobortis lacus, nec maximus arcu. Ut vulputate consectetur felis, et rutrum erat. Fusce pretium ante a massa mattis, sed tempor nisi ullamcorper. Quisque ac eros pharetra, interdum mauris sit amet, dictum leo. In venenatis scelerisque magna ac efficitur. Suspendisse commodo, lectus a eleifend ultricies, lorem lacus vulputate felis, id consectetur erat nisl nec nisi. Sed ipsum nibh, iaculis lacinia arcu sed, fermentum pharetra ligula. Vivamus ex velit, venenatis id tortor a, dignissim laoreet magna.\n" +
    "\n" +
    "Praesent porta egestas eros ut fermentum. Fusce erat sapien, dapibus et lorem sit amet, fermentum vestibulum enim. Ut pharetra venenatis tincidunt. Mauris commodo euismod quam, quis feugiat nibh. Nullam sit amet diam mi. Cras pellentesque, tortor varius semper pretium, est risus pharetra erat, non bibendum nulla quam in nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam et bibendum diam. Aliquam congue nibh a ipsum ullamcorper, nec feugiat arcu tincidunt. Mauris a sapien tincidunt ipsum bibendum condimentum at laoreet augue. Pellentesque feugiat est ut ornare dictum. Vivamus aliquam elit ut risus vestibulum, non iaculis nibh rutrum.\n" +
    "\n" +
    "Nullam hendrerit tortor sed purus varius, nec faucibus nulla malesuada. Sed tincidunt eros vitae tristique placerat. Fusce efficitur enim non nisl scelerisque, quis malesuada elit mattis. Morbi turpis purus, fringilla eu finibus eu, facilisis eu leo. Vestibulum ornare velit eu mi hendrerit convallis. Quisque sollicitudin libero sit amet risus luctus pellentesque. Nam non porta libero. Vivamus elementum tempus leo eu condimentum. Nunc ut turpis ac tellus bibendum tempor. Vivamus urna massa, accumsan eget auctor nec, pharetra id nibh. Nunc pellentesque lorem sit amet congue egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet sodales nisl. Donec eleifend hendrerit neque, vitae lacinia velit scelerisque in.m"
}
]


export const Default = Template.bind({});
Default.args = {
  navigationList
};
