import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent, EmployeeComponent, AppComponent } from './utils/index.pages';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: 'addEmployee',
        component: AppComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
