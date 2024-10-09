import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { SaladService } from './salad.service';

@Injectable({
  providedIn: 'root',
})
export class NameValidator implements AsyncValidator {
  constructor(private saladService: SaladService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.saladService.getOrderNames().pipe(
      map((names) => {
        const found = names.some(
          (value) => value.name.toLowerCase() === control.value.toLowerCase()
        );

        if (found) {
          return { nameTaken: true };
        } else {
          return null;
        }
      })
    );
  }
}
