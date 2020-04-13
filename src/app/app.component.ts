import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/index';
import { initFactionsState } from '@store/faction/faction.actions';

@Component({
  selector: 'dhrp-root',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent {
  constructor(private store: Store<State>) {
    this.store.dispatch(initFactionsState());
  }
}
