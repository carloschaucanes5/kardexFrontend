import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes:Routes = [
  {path:"",redirectTo:"user-create", pathMatch:"full"},
  {path:"user-create",component:UserCreateComponent},
  {path:"user-list",component:UserListComponent},
  {path:"user-edit",component:UserEditComponent},
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class UserRoutingModule{}