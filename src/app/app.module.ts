import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaladModule } from './salad/salad.module';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [AppComponent, OrderComponent],
  imports: [BrowserModule, AppRoutingModule, SaladModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
