import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routes/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FrontendComponent } from './components/skills/frontend/frontend.component';
import { BackendComponent } from './components/skills/backend/backend.component';
import { DataManagementComponent } from './components/skills/data-management/data-management.component';
import { OthersComponent } from './components/skills/others/others.component';
import { AngularComponent } from './components/skills/frontend/angular/angular.component';
import { ReactComponent } from './components/skills/frontend/react/react.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SkillsComponent,
    ContactComponent,
    AboutmeComponent,
    FrontendComponent,
    BackendComponent,
    DataManagementComponent,
    OthersComponent,
    AngularComponent,
    ReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
