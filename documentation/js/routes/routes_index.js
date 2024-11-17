var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"MainLayoutComponent","children":[{"path":"","loadChildren":"./features/home/home.module#HomeModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[],"module":"HomeModule"}]},{"path":"profile","loadChildren":"./features/profile/profile.module#ProfileModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/profile/profile-routing.module.ts","module":"ProfileRoutingModule","children":[{"path":"","component":"ProfileComponent"}],"kind":"module"}],"module":"ProfileModule"}]},{"path":"services","loadChildren":"./features/services/services.module#ServicesModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[],"module":"ServicesModule"}]},{"path":"requests","loadChildren":"./features/services/requests/requests.module#RequestsModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[],"module":"RequestsModule"}]},{"path":"messages","loadChildren":"./features/messages/messages.module#MessagesModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[],"module":"MessagesModule"}]},{"path":"discover","loadChildren":"./features/discover/discover.module#DiscoverModule","canActivate":["AuthGuard"]},{"path":"worker/:id","component":"WorkerDetailsComponent"}]},{"path":"auth","loadChildren":"./features/auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"welcome","component":"WelcomeComponent"},{"path":"user-type","component":"UserTypeComponent"},{"path":"register","component":"RegisterMethodComponent"},{"path":"register/email","component":"EmailRegisterComponent"},{"path":"register/phone","component":"PhoneRegisterComponent"},{"path":"verify","component":"VerifyCodeComponent"},{"path":"complete-profile","component":"CompleteProfileComponent"},{"path":"login","component":"LoginComponent"},{"path":"","redirectTo":"welcome","pathMatch":"full"}],"kind":"module"}],"module":"AuthModule"}]}],"kind":"module"}]}
