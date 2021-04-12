import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "../components/homepage/homepage.component";
import {SkillsComponent} from "../components/skills/skills.component";
import {ContactComponent} from "../components/contact/contact.component";
import {AboutmeComponent} from "../components/aboutme/aboutme.component";
import {LanguagesComponent} from "../components/skills/languages/languages.component";
import {FrontendComponent} from "../components/skills/frontend/frontend.component";
import {BackendComponent} from "../components/skills/backend/backend.component";
import {DataManagementComponent} from "../components/skills/data-management/data-management.component";
import {OthersComponent} from "../components/skills/others/others.component";
import {PythonComponent} from "../components/skills/languages/python/python.component";
import {JavatypescriptComponent} from "../components/skills/languages/javatypescript/javatypescript.component";
import {CsharpComponent} from "../components/skills/languages/csharp/csharp.component";
import {JavaComponent} from "../components/skills/languages/java/java.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'skills', component: SkillsComponent, children: [
      {path: 'languages', component: LanguagesComponent, children: [
          {path: 'python', component: PythonComponent},
          {path: 'java', component: JavaComponent},
          {path: 'c#', component: CsharpComponent},
          {path: 'javatypescript', component: JavatypescriptComponent}
        ]},
      {path: 'frontend', component: FrontendComponent},
      {path: 'backend', component: BackendComponent},
      {path: 'data-management', component: DataManagementComponent},
      {path: 'others', component: OthersComponent}
    ]},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
