import { Routes } from '@angular/router';
import { SupportpageComponent } from './components/supportpage/supportpage.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GetapiComponent } from './components/getapi/getapi.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

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
