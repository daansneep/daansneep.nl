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
import {AngularComponent} from "../components/skills/frontend/angular/angular.component";
import {ReactComponent} from "../components/skills/frontend/react/react.component";
import {NodeComponent} from "../components/skills/backend/node/node.component";
import {DotnetComponent} from "../components/skills/backend/dotnet/dotnet.component";
import {SqlComponent} from "../components/skills/data-management/sql/sql.component";
import {NosqlComponent} from "../components/skills/data-management/nosql/nosql.component";
import {DockerComponent} from "../components/skills/others/docker/docker.component";
import {WaterfallComponent} from "../components/skills/others/waterfall/waterfall.component";
import {ScrumComponent} from "../components/skills/others/scrum/scrum.component";
import {RupComponent} from "../components/skills/others/rup/rup.component";

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
      {path: 'frontend', component: FrontendComponent, children: [
          {path: 'angular', component: AngularComponent},
          {path: 'react', component: ReactComponent},
        ]},
      {path: 'backend', component: BackendComponent, children: [
          {path: 'node', component: NodeComponent},
          {path: 'dotnet', component: DotnetComponent}
        ]},
      {path: 'data-management', component: DataManagementComponent, children: [
          {path: 'sql', component: SqlComponent},
          {path: 'nosql', component: NosqlComponent}
        ]},
      {path: 'others', component: OthersComponent, children: [
          {path: 'docker', component: DockerComponent},
          {path: 'waterfall', component: WaterfallComponent},
          {path: 'scrum', component: ScrumComponent},
          {path: 'rup', component: RupComponent}
        ]}
    ]},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
