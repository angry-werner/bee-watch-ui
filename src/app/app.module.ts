import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationsComponent } from './environment/locations/locations.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { LandingPageComponent } from './shell/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
