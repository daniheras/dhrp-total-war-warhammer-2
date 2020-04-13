import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableItemCardComponent } from './selectable-item-card.component';
import { FormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';



@NgModule({
  declarations: [SelectableItemCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbCheckboxModule
  ],
  exports: [
    SelectableItemCardComponent
  ]
})
export class SelectableItemCardModule { }
