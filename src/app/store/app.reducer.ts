import { createReducer, on } from "@ngrx/store";
import { SetName, SetTel } from "./app.actions";

export interface AppState {
    name: string;
    tel: string;
    orderId?: number;
}

export const initialState: AppState = {
    name: '',
    tel: '',
};

export const appReducer = createReducer(initialState, 
    on(SetName, (state, action) => {
        return { ...state, name: action.name }
    }),
    on(SetTel, (state, { tel }) => ({ ...state, tel })
    ),
)