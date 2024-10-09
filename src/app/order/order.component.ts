import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NameValidator } from '../providers/name.validator';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  public orderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private nameValidator: NameValidator
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
      console.log(this.orderForm.value);
      this.router.navigate(['salad']);
    }
  }
}
