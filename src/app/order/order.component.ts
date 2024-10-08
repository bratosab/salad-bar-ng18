import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  public orderForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      tel: [''],
    });
  }

  startOrder() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
      this.router.navigate(['salad']);  
    }
  }
}
