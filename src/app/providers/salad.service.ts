import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Name } from "../models/name.model";

@Injectable({
    providedIn: 'root'
})
export class SaladService {
    constructor(private http: HttpClient) { }

    getOrderNames() {
        return this.http.get<Name[]>('https://retoolapi.dev/Mqonz7/names');
    }
}