import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { VehcileListComponent } from './vehcile-list/vehcile-list.component';
import {VehicleService} from './Vehicle-list-service';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { OrderBy } from './sort-table';



@NgModule({
  declarations: [
    AppComponent,
    TableHeaderComponent,
    VehcileListComponent,
    VehicleDetailsComponent,
    OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
