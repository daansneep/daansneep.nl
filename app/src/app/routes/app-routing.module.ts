import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "../components/homepage/homepage.component";
import {SkillsComponent} from "../components/skills/skills.component";
import {ContactComponent} from "../components/contact/contact.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
