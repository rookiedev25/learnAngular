import { Routes } from '@angular/router';
import { SupportpageComponent } from './supportpage/supportpage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { GetapiComponent } from './getapi/getapi.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

//* all the routes created here, are passed into app.config.ts as routes into provideRouter(route)
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'support',
    component: SupportpageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'getAPI', 
    component: GetapiComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  // wild card routing:
  // works with a syntax below: 
  {
    path: "**", // if the user-enterd route is not available in the above listed routes, then load this page for those false-routes.
    component: PagenotfoundComponent
  }
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   // component: LandingPageComponent,
  //   pathMatch: 'full',
  // },
];
