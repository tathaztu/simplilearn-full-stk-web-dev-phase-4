import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component:LoginComponent}, // Can be activated conditionally; we will use RouteGardService
  {path:'login', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'todos', component:ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
