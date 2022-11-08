// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
const firebaseConfig = {
  apiKey: "AIzaSyDqWZ_2QN-_QspJkx1YCJst-6WDNocFvB4",
  authDomain: "guidde-me.firebaseapp.com",
  projectId: "guidde-me",
  storageBucket: "guidde-me.appspot.com",
  messagingSenderId: "496956095874",
  appId: "1:496956095874:web:b53b369db945c22d0da39b"
};

export const environment = {
  production: true,
  firebase: firebaseConfig,
  emulator: false
};

