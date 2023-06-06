import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudFormComponent } from './crud-form/crud-form.component';

const routes: Routes = [
  {
    path:"",redirectTo:"crud-list",pathMatch:"full"
  },
  {
    path:"crud-list",component:CrudListComponent
  },
  {
    path:"crud-form/:id",component:CrudFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
