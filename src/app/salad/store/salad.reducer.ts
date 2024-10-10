import { createReducer, on } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { ChooseTopping, SaveToppings } from './salad.actions';

export interface SaladState {
  toppings: Topping[];
  dressing: string;
  chosenToppings: Topping[];
}

export const initialState: SaladState = {
  toppings: [],
  dressing: 'Cesar',
  chosenToppings: [],
};

export const saladReducer = createReducer(
  initialState,
  on(SaveToppings, (state, { list }) => {
    return { ...state, toppings: list };
  }),
  on(ChooseTopping, (state, { choice }) => {
    return { ...state, chosenToppings: [...state.chosenToppings, choice] };
  })
);
