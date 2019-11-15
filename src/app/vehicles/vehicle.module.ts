import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
    declarations: [
        VehicleComponent
    ],
    exports: [
        VehicleComponent,
        HttpClientModule
    ],
    imports: [
        CommonModule
    ],
    bootstrap: [VehicleComponent]
})

export class VehicleModule{}