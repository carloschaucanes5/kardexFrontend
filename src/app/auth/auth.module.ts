import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { MaterialModule } from '../library/material/material.module';
@NgModule({
  declarations: [
    LoginComponent,
    ForgetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule  
  ],
  exports:[
    LoginComponent,
    ForgetComponent
  ]
})
export class AuthModule { }
