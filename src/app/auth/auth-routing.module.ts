import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';


export const authRoutes:Routes = [
  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"forget",component:ForgetComponent}
];
