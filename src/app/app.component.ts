import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountHeaderComponent } from './components/count-header/count-header.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';
import { SupportpageComponent } from './components/supportpage/supportpage.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { GetapiComponent } from './components/getapi/getapi.component';
import { PostapiComponent } from './components/postapi/postapi.component';
import { RegisterComponent } from './components/register/register.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CountHeaderComponent,
    InputFormComponent,
    FooterComponent,
    PlaygroundComponent,
    DatabindingComponent, 
    DirectivesComponent, 
    NavbarComponent, 
    ReactiveformsComponent,
    SupportpageComponent, LandingPageComponent,
    PagenotfoundComponent, GetapiComponent, PostapiComponent, RegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-easy';
}
