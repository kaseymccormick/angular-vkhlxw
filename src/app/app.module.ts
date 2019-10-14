import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DriverSingleComponent } from './drivers/driver-single/driver-single.component';
import { DriversComponent } from './drivers/drivers/drivers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DriverSingleComponent, DriversComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
