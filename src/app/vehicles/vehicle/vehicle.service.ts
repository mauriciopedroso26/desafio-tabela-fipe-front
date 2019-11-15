import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';

const API_FIPE_VEHICLES = 'http://ec2-52-91-19-205.compute-1.amazonaws.com:8070/api/admin/fipe/';
const BRANDS = 'http://fipeapi.appspot.com/api/1/carros/marcas.json';
const VEHICLES = 'http://fipeapi.appspot.com/api/1/carros/veiculos/';

@Injectable({providedIn: 'root'})
export class VehicleService{

    constructor(private http: HttpClient){}

    listFipeVehicles(idBrand: string, idVehicle: string){
        return this.http
            .get<Vehicle[]>(API_FIPE_VEHICLES + idBrand + '/' + idVehicle);
    }

    listBrand(){
        return this.http
                    .get<any[]>(BRANDS);
    }

    listVehicles(id: string){
        return this.http
                    .get<any[]>(VEHICLES + id + ".json");
    }
}