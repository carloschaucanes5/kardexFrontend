import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { userRoutes } from './user/user-routing.module';
import { authRoutes } from './auth/auth-routing.module';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'auth',children:authRoutes},
  {path:'user',children:userRoutes},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
