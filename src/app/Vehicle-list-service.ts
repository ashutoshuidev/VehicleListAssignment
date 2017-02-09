import {Injectable}  from  '@angular/core';
import { Vehicle } from './vehicle';
import { Vehicles } from './vehicle-data';
import {Http}  from  '@angular/http';
import {Observable}  from  'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VehicleService{

    constructor(public httpSvc:Http){}

    getvehicles() : Promise<Vehicle[]>{
        return Promise.resolve(Vehicles)
    }

getVehicleListFromApi():Observable<any>{
return this.httpSvc.get("./app/API/vehicleList.json")
.map((response)=>response.json())
.catch((error)=>Observable.throw(error.json()))
    }

}
    