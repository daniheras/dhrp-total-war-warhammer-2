import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Faction } from '@meta/factions';
import { FactionsService } from '@modules/random-picker/factions.service';
import { Store } from '@ngrx/store';
import { State } from '@store/index';
import { toggleFactionSelection } from '@store/faction/faction.actions';

@Component({
  selector: 'dhrp-selectable-item-card',
  templateUrl: './selectable-item-card.component.html',
  styleUrls: ['./selectable-item-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectableItemCardComponent implements OnInit {

  @Input() faction: Faction;
  isFactionVisible: boolean = true;

  constructor(
    private factionsService: FactionsService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    //this.isFactionVisible = this.faction.playable === (this.factionsService.filters.onlyPlayable || undefined);
  }

  toggleSelect() {
    this.store.dispatch(toggleFactionSelection({ factionId: this.faction.id }));
  }

}
