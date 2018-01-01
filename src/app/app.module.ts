import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { LocationsComponent } from './environment/locations/locations.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
