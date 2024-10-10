import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { SaladComponent } from './salad/salad.component';
import { saladReducer } from './salad/store/salad.reducer';
import { provideStore } from '@ngrx/store';

export const routes: Routes = [
  { path: '', component: OrderComponent },
  {
    path: 'salad',
    component: SaladComponent,
    providers: [provideStore({  })],
  },
//   {
//     path: 'kitchen',
//     loadChildren: () =>
//       import('./kitchen/kitchen.module').then((m) => m.KitchenModule),
//   },
  {
    path: 'kitchen',
    loadComponent: () =>
      import('./kitchen/kitchen.component').then((c) => c.KitchenComponent),
  },
];
