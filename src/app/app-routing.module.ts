import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './APP-COMPONENTS/home/home.component';

import { LoginComponent } from './APP-COMPONENTS/Login/login/login.component';
import { NavbarComponent } from './APP-COMPONENTS/navbar/navbar.component';
import { SidebarComponent } from './APP-COMPONENTS/sidebar/sidebar.component';


export const routes: Routes = [ 
  { path: '', redirectTo: 'Home', pathMatch: 'full', }, 
  { path: 'navbar', component: NavbarComponent, data: { title: 'Login Page' } }, 
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' } }, 
  { path: 'sidenavbar', component: SidebarComponent, data: { title: 'Login Page' } }, 
  { path: 'home', component: HomeComponent, data: { title: 'Login Page' } }, 
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
