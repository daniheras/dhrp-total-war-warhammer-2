import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import {
  NbLayoutModule,
  NbBadgeModule,
  NbTooltipModule,
  NbIconModule,
  NbButtonModule,
  NbDialogModule
} from '@nebular/theme';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    RouterModule,
    NbBadgeModule,
    NbTooltipModule,
    NbButtonModule,
    NbIconModule,
    NbDialogModule.forRoot({})
  ]
})
export class DefaultLayoutModule { }
