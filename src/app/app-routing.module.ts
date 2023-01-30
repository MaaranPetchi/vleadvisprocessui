import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './APP-COMPONENTS/LandingPage/landingpage/landingpage.component';

export const routes: Routes = [ 
  { path: '', redirectTo: 'Home', pathMatch: 'full', }, 
  { path: 'home', component: LandingpageComponent, data: { title: 'Login Page' } }, 
  

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
