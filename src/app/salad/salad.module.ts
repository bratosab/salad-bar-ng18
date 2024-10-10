import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { StoreModule } from '@ngrx/store';
import { saladReducer } from './store/salad.reducer';
import { EffectsModule } from '@ngrx/effects';
import { loadToppings } from './store/salad.effects';


@NgModule({
    imports: [
        CommonModule,
        SaladRoutingModule,
        SaladComponent,
        ToppingsComponent
    ]
})
export class SaladModule { }
