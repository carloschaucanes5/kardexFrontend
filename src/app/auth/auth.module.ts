import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { MaterialModule } from '../library/material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    ForgetComponent
  ],
  providers:[
    AuthService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    ForgetComponent,
    LoginComponent,
  ]
})
export class AuthModule { }
