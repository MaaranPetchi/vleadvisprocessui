import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './APP-COMPONENTS/Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './APP-COMPONENTS/Login/login/login.component';
// import { LandingpageComponent } from './APP-COMPONENTS/LandingPage/landingpage/landingpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './APP-COMPONENTS/navbar/navbar.component';
import { EmployeeComponent } from './APP-COMPONENTS/EmployeeController/Components/employee/employee.component';
import { HomeComponent } from './APP-COMPONENTS/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeModule } from './APP-COMPONENTS/EmployeeController/EmployeeModule/employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    // LandingpageComponent,
    NavbarComponent,
    EmployeeComponent,
    HomeComponent,
    
    // ReactiveFormsModule
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
