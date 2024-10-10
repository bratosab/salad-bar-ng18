import { createAction, props } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

export enum SaladActionTypes {
  GetToppings = '[Salad] Get Toppings',
  SaveToppings = '[Salad] Save Toppings',
  ChooseTopping = '[Salad] Choose Topping',
}

export const GetToppings = createAction(SaladActionTypes.GetToppings);
export const SaveToppings = createAction(
  SaladActionTypes.SaveToppings,
  props<{ list: Topping[] }>()
);
export const ChooseTopping = createAction(
  SaladActionTypes.ChooseTopping,
  props<{ choice: Topping }>()
);
