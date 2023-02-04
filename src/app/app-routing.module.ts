import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpComponent} from './components/sp/sp.component';

const routes: Routes = [
  { path: '', component: SpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
