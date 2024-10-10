import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { SaladModule } from './app/salad/salad.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app/store/app.reducer';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      SaladModule,
      ReactiveFormsModule,
      StoreModule.forRoot({ app: appReducer, router: routerReducer }, {}),
      EffectsModule.forRoot([]),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    ),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
