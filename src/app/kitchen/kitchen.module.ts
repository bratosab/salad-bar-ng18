import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenRoutingModule } from './kitchen-routing.module';
import { KitchenComponent } from './kitchen.component';


@NgModule({
    imports: [
        CommonModule,
        KitchenRoutingModule,
        KitchenComponent
    ]
})
export class KitchenModule { }
