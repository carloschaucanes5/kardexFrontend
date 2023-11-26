import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../library/material/material.module';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent
  ]
})
export class SharedModule { }
