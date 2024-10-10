import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SaladModule } from './salad/salad.module';
import { ReactiveFormsModule } from '@angular/forms';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { appReducer } from './store/app.reducer';
import {
  provideRouterStore,
  routerReducer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import {
  provideStoreDevtools,
  StoreDevtoolsModule,
} from '@ngrx/store-devtools';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { saladReducer } from './salad/store/salad.reducer';
import { loadToppings } from './salad/store/salad.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(SaladModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideStore({
      app: appReducer,
      router: routerReducer,
      salad: saladReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects({ loadToppings }),
    provideRouterStore(),
  ],
};
