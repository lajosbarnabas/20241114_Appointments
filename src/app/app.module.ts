import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentItemComponent } from './appointment-item/appointment-item.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentItemComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
