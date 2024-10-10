import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Name } from '../models/name.model';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root',
})
export class SaladService {
  constructor(private http: HttpClient) {}

  getOrderNames() {
    return this.http.get<Name[]>('https://retoolapi.dev/Mqonz7/names');
  }

  getToppings() {
    return this.http.get<Topping[]>('https://retoolapi.dev/udhTkG/toppings');
  }
}
