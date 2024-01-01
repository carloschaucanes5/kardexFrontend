import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { authGuard } from './auth/auth.guard';
import { PrincipalComponent } from './shared/principal/principal.component';

const routes: Routes = [
  {
    path:'', redirectTo:'auth', pathMatch:'full'
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'main',
    component:PrincipalComponent,
    providers:[AuthService],
    canActivate:[authGuard]
  },
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:"**",
    loadComponent:()=>import('./page-not-found/page-not-found.component').then(comp=>comp.PageNotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
