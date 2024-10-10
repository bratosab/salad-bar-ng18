import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NameValidator } from '../providers/name.validator';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { SetName, SetTel } from '../store/app.actions';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrl: './order.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],
})
export class OrderComponent {
  public orderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private nameValidator: NameValidator,
    private store: Store<{ app: AppState}>
  ) {
    this.orderForm = this.fb.group({
      name: ['', {  
        validators: [Validators.required],
        asyncValidators: [this.nameValidator],
        // updateOn: 'blur'
      }],
      tel: [''],
    });
  }

  get nameControl() {
    return this.orderForm.get('name');
  }

  startOrder() {
    if (this.orderForm.valid) {
      this.store.dispatch(SetName({ name: this.orderForm.value.name }))
      this.store.dispatch(SetTel({ tel: this.orderForm.value.tel }))
      this.router.navigate(['salad']);
    }
  }
}
