import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SpComponent } from './components/sp/sp.component';
import { HomeComponent } from './components/sp/home/home.component';
import { AboutMeComponent } from './components/sp/about-me/about-me.component';
import { ContactComponent } from './components/sp/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
