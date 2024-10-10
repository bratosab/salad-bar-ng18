import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SaladState } from './store/salad.reducer';
import { GetToppings } from './store/salad.actions';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.scss'
})
export class SaladComponent implements OnInit {
  private store = inject(Store<{ salad: SaladState}>)

  ngOnInit(): void {
    this.store.dispatch(GetToppings())
  }

}
