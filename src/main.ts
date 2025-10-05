import {ApplicationRef, enableProdMode} from '@angular/core';
import {enableDebugTools} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

async function loadGoogleMapsApi(): Promise<void> {
  if (window.google?.maps) {
    return;
  }

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject('Google Maps API failed to load');
    document.head.appendChild(script);
  });

  await google.maps.importLibrary('maps');
}

loadGoogleMapsApi()
  .then(() => {
    console.log('✅ Google Maps API loaded (new API)');
    return platformBrowserDynamic().bootstrapModule(AppModule);
  })
  .then(moduleRef => {
    const appRef = moduleRef.injector.get(ApplicationRef);
    const compRef = appRef.components[0];
    enableDebugTools(compRef);
  })
  .catch(err => console.error('Error bootstrapping app:', err));
