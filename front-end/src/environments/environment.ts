// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // API's PATH
  apiUrl:
    "http://localhost:3000" ||
    "http://stevejobs-class-managment.us-east-2.elasticbeanstalk.com",
  usersPath: "users",
  subjectsPath: "subjects",
  coursesPath: "courses",
  loginPath: "auth/login",
  signupPath: "auth/signup",
  defaultImage:
    // tslint:disable-next-line: max-line-length
    "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/59435668_10214563408978447_3548318657866104832_o.jpg?_nc_cat=109&_nc_oc=AQlsf2B8r9EzGvlFae0N-kY5FRxC7gRd0NS4kz70WjeSOywLxSeC2GcpdjzM0BxGMVI&_nc_ht=scontent-mxp1-1.xx&oh=a6ab8f69a7cd274c7cb5ad4110bbb020&oe=5EAA2BD3"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
