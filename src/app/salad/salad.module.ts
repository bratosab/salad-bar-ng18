import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { StoreModule } from '@ngrx/store';
import { saladReducer } from './store/salad.reducer';


@NgModule({
  declarations: [
    SaladComponent,
    ToppingsComponent
  ],
  imports: [
    CommonModule,
    SaladRoutingModule,
    StoreModule.forFeature('salad', saladReducer)
  ]
})
export class SaladModule { }
