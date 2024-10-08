import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'salad-bar';
  private store = inject(Store<{ app: AppState }>)
  name$!: Observable<string>;

  ngOnInit(): void {
    this.name$ = this.store.select(state => state.app.name);
  }

}
