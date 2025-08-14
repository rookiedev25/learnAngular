import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CountHeaderComponent } from './count-header/count-header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { PlaygroundComponent } from './playground/playground.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { SupportpageComponent } from './supportpage/supportpage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GetapiComponent } from './getapi/getapi.component';
import { PostapiComponent } from './postapi/postapi.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

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
