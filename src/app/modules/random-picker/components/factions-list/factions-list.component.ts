import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FactionsService, Filters } from '@modules/random-picker/factions.service';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { State } from '@store/index';
import { toggleOnlyPlayableFilter, toggleAllFactionsSepection } from '@store/faction/faction.actions';
import { RandomizrComponent } from '../randomizr/randomizr.component';

@Component({
  selector: 'dhrp-factions-list',
  templateUrl: './factions-list.component.html',
  styleUrls: ['./factions-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FactionsListComponent implements OnInit {
  selectAll = true;

  constructor(
    public factionsService: FactionsService,
    private toastrService: NbToastrService,
    private store: Store<State>,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {}

  getFactions() {
    this.store.dispatch(toggleOnlyPlayableFilter());
  }

  goRandomizr() {
    this.dialogService.open(RandomizrComponent, {});
  }

  selectAllToggled() {
    this.store.dispatch(toggleAllFactionsSepection({ value: !this.selectAll }));
  }

}
