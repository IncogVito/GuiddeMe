import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {
  SbConventionHighestDivision,
  SbConventionMiddleDivision
} from "../../../../../../../.storybook/storybook-naming-convention";
import {GoogleMapReadOnlyComponent} from "./google-map-read-only.component";
import {AgmCoreModule} from "@agm/core";
import {AgmOverlays} from "agm-overlays";
import {MapElement, MapGeneralPosition} from "../../../models/map.model";


export default {
  component: GoogleMapReadOnlyComponent,
  title: SbConventionHighestDivision.DesignSystem + '/' + SbConventionMiddleDivision.Atoms + '/Google map',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        AgmCoreModule.forRoot({
          libraries: ['places', 'drawing', 'geometry']
        }),
        AgmOverlays
      ],
    }),
  ],

} as Meta;

const Template: Story = args => ({
  props: {
    ...args
  },
});

const mapPins: MapElement[] = [{
  latitude: 50.0618212,
  longitude: 19.938209,
  index: 1
}]

const mapGeneralPosition: MapGeneralPosition = {
  zoom: 15,
  position: {
    latitude: 50.0618212,
    longitude: 19.938209
  }
}

export const Default = Template.bind({});
Default.args = {
  mapPins: mapPins,
  mapGeneralPosition
};
