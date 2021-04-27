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
import {AngularComponent} from "../components/skills/frontend/angular/angular.component";
import {ReactComponent} from "../components/skills/frontend/react/react.component";
import {NodeComponent} from "../components/skills/backend/node/node.component";
import {DotnetComponent} from "../components/skills/backend/dotnet/dotnet.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'skills', component: SkillsComponent, children: [
      {path: 'languages', component: LanguagesComponent},
      {path: 'frontend', component: FrontendComponent, children: [
          {path: 'angular', component: AngularComponent},
          {path: 'react', component: ReactComponent},
        ]},
      {path: 'backend', component: BackendComponent, children: [
          {path: 'node', component: NodeComponent},
          {path: 'dotnet', component: DotnetComponent}
        ]},
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
