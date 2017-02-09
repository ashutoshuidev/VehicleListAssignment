import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../Vehicle-list-service';
import {Vehicle} from '../vehicle';
import {OrderBy} from "../sort-table"

@Component({
  selector: 'app-vehcile-list',
  templateUrl: './vehcile-list.component.html',
  styleUrls: ['./vehcile-list.component.css']
})
export class VehcileListComponent implements OnInit {

  constructor(private vehicleService : VehicleService) {
    
   }

  ngOnInit() {
    //this.getVehicleList();
    this.vehicleService.getVehicleListFromApi().subscribe((result) => {console.log(this.jsonVehicleList = result)},
    error => {
      console.log(error);
    }); 
  }

  getVehicleList() :void{
    //this.vehicleService.getvehicles().then(vehicles => this.vehicles = vehicles);
    //console.log(this.vehicles);
  }

  jsonVehicleList:any = [] ;

  vehicleHeader = ["Make","Model","Year","Price"];
  vehicles  : Vehicle[];
  vehicleFlag : boolean;
  rowData:any;
  sort: any = {
    column: 'make', //to match the variable of one of the columns
    descending: false
  };

  showVehicleDetails(rowData:any){
   this.vehicleFlag=true;
   this.rowData=rowData;
  }

  selectedClass(columnName): any{
    //console.log(columnName == this.sort.column ? 'sort-' + this.sort.descending : false);
    return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
  }

  changeSorting(columnName): void{  
    var sort = this.sort;
    //console.log(sort);
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }

  convertSorting(): string{
   // console.log(this.sort.descending ? '-' + this.sort.column : this.sort.column);
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

  columns: any[] = [
    {
      display: 'Make', //The text to display
      variable: 'make', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'Model', //The text to display
      variable: 'model', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    }
    ,
    {
      display: 'year', //The text to display
      variable: 'year', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'Price', //The text to display
      variable: 'price', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    }
    
  ];
}


