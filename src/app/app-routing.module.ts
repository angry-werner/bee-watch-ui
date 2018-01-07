import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from "./shell/landing-page/landing-page.component";
import { LocationsComponent } from './environment/locations/locations.component';

const routes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
