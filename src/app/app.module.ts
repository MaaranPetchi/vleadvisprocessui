import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './APP-COMPONENTS/Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './APP-COMPONENTS/Login/login/login.component';
import { LandingpageComponent } from './APP-COMPONENTS/LandingPage/landingpage/landingpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
