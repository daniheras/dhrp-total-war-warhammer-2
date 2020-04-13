import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomPickerRoutingModule } from './random-picker-routing.module';
import { RandomPickerComponent } from './pages/main/random-picker.component';
import { NbCardModule, NbTabsetModule, NbBadgeModule, NbTooltipModule, NbCheckboxModule, NbButtonModule, NbIconModule, NbDialogModule, NbToggleModule } from '@nebular/theme';
import { FactionsListComponent } from './components/factions-list/factions-list.component';
import { SelectableItemCardModule } from '@shared/components/selectable-item-card/selectable-item-card.module';
import { FormsModule } from '@angular/forms';
import { RandomizrComponent } from './components/randomizr/randomizr.component';


@NgModule({
  declarations: [RandomPickerComponent, FactionsListComponent, RandomizrComponent],
  imports: [
    CommonModule,
    RandomPickerRoutingModule,
    NbCardModule,
    NbTabsetModule,
    NbBadgeModule,
    NbTooltipModule,
    NbCheckboxModule,
    NbButtonModule,
    SelectableItemCardModule,
    FormsModule,
    NbIconModule,
    NbDialogModule.forChild({}),
    NbToggleModule
  ]
})
export class RandomPickerModule { }
