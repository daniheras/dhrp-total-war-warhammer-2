import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomPickerComponent } from './pages/main/random-picker.component';

const routes: Routes = [{ path: '', component: RandomPickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomPickerRoutingModule { }
