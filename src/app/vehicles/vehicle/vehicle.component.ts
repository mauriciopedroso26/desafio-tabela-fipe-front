import { Component, Input } from '@angular/core';
import { VehicleService } from './vehicle.service';

@Component({
    selector: 'ap-vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['vehicle.component.css']
})

export class VehicleComponent {
    fipeVehicles: Object = [];
    brands: any[] = [];
    vehicles: any[] = [];

    idBrand: string = '';

    constructor(private vehicleService : VehicleService){}
  
    ngOnInit(): void {
        this.vehicleService
            .listBrand()
            .subscribe(brands => {
                this.brands = brands;
            })

    }

    onChangeBrand(idBrand: string): void{
        if(idBrand != '0'){
            this.fipeVehicles = [];

            this.vehicleService
                .listVehicles(idBrand)
                .subscribe(vehicles => {
                    this.vehicles = vehicles
                    this.idBrand = idBrand;
                });
        }else{
            this.vehicles = [];
            this.fipeVehicles = [];
        }
    }

    onChangeVehicle(idVehicle: string): void{
        if(idVehicle != '0'){
            this.vehicleService
                .listFipeVehicles(this.idBrand, idVehicle)
                .subscribe(fipeVehicles => {
                    this.fipeVehicles = fipeVehicles
                });
        }else{
            this.fipeVehicles = [];
        }
    }
}