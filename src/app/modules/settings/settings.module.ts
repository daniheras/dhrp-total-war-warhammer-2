import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsModalComponent } from './components/settings-modal/settings-modal.component';
import { NbCardModule, NbToggleModule } from '@nebular/theme';

@NgModule({
  declarations: [SettingsModalComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbToggleModule
  ],
  exports: [
    SettingsModalComponent
  ]
})
export class SettingsModule { }
