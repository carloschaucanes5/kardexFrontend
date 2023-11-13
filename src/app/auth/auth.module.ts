import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { MaterialModule } from '../library/material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  declarations: [
    LoginComponent,
    ForgetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule  
  ],
  exports:[
    LoginComponent,
    ForgetComponent
  ]
})
export class AuthModule { }
