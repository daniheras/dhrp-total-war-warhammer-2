import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './core/layouts/default-layout.component';
import { DefaultLayoutModule } from './core/layouts/default-layout.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'random-picker',
        pathMatch: 'full'
      },
      {
        path: 'random-picker',
        loadChildren: () => import('@modules/random-picker/random-picker.module').then(m => m.RandomPickerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DefaultLayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
