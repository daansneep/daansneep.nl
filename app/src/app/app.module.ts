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
import { LanguagesComponent } from './components/skills/languages/languages.component';
import { JavaComponent } from './components/skills/languages/java/java.component';
import { PythonComponent } from './components/skills/languages/python/python.component';
import { CsharpComponent } from './components/skills/languages/csharp/csharp.component';
import { JavatypescriptComponent } from './components/skills/languages/javatypescript/javatypescript.component';
import { NodeComponent } from './components/skills/backend/node/node.component';
import { DotnetComponent } from './components/skills/backend/dotnet/dotnet.component';
import { SqlComponent } from './components/skills/data-management/sql/sql.component';
import { NosqlComponent } from './components/skills/data-management/nosql/nosql.component';
import { DockerComponent } from './components/skills/others/docker/docker.component';
import { WaterfallComponent } from './components/skills/others/waterfall/waterfall.component';
import { ScrumComponent } from './components/skills/others/scrum/scrum.component';
import { RupComponent } from './components/skills/others/rup/rup.component';

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
    ReactComponent,
    LanguagesComponent,
    JavaComponent,
    PythonComponent,
    CsharpComponent,
    JavatypescriptComponent,
    NodeComponent,
    DotnetComponent,
    SqlComponent,
    NosqlComponent,
    DockerComponent,
    WaterfallComponent,
    ScrumComponent,
    RupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
