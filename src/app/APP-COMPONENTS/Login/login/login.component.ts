import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginserviceService } from 'src/app/SERVICES/LoginServices/loginservice.service';
 import { FormsModule } from '@angular/forms';    
@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.scss']    
})    
export class LoginComponent {    

  model : any={};    

  errorMessage:string | undefined ;    
  constructor(private router:Router,private LoginService:LoginserviceService) { }    


  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }    
  login(){    
    debugger;    
   this.LoginService.Login(this.model).subscribe(    
      data => {    
        debugger;  
        console.log(data);  
        if(data.success==true)    
        {       
          console.log(this.router.url)
          this.router.navigateByUrl("/dashboard");    
          console.log(this.router.url)
          debugger;    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
   });     
  };    
}