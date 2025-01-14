import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/servcies/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { MytranslateService } from '../../core/servcies/mytranslate.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink,TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy{
  private readonly _AuthService=inject(AuthService);
  private readonly _FormBuilder=inject(FormBuilder);
  private readonly _Router=inject(Router);
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  private readonly _MytranslateService=inject(MytranslateService);
  messgerror:string='';
  messsuccess:string='';
  isloading:boolean=false;
  unsub!:Subscription;
login:FormGroup=this._FormBuilder.group({
email:[null,[Validators.required, Validators.email]],
password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]]
})  
ngOnInit(): void {
        //translations
if (isPlatformBrowser(this._PLATFORM_ID)) {
if(localStorage.getItem('lang')!=null){
this._MytranslateService.useChoiceLang();
} 
}
} 
loginfunction(){
if(this.login.valid){
this.isloading=true
    this.unsub= this._AuthService.setloginform(this.login.value).subscribe({
                                next:(res)=>{
                                            this.isloading=false;
                                            this.messgerror="";
                                            this.messsuccess=res.message; 
                                          
                                          //1. save token
                                            localStorage.setItem("token",res.token);

                                            //2. decode and have data
                                            this._AuthService.decodetoken();

                                            // 3.navigate to home
                                          if(res.message == "success"){
                                              setTimeout(() => {
                                                this._Router.navigate(['/home']);
                                                }, 1000);
                                            }           
                            },
                                error:(err:HttpErrorResponse)=>{
                                            this.isloading=false;
                                            this.messsuccess="";
                                            this.messgerror=err.error.message;
                                            // this.messgerror="Incorrect email or password";

                                }
    });
}
else{
this.login.markAllAsTouched();
}
}
textlag(){
    if (isPlatformBrowser(this._PLATFORM_ID)) {
    if (localStorage.getItem("lang")!=null) {
         if (localStorage.getItem("lang")=='en') {
          return true;
         }
         else if (localStorage.getItem("lang")=='ar') {
          return false;
         }
    } 
    else if (localStorage.getItem("lang")==null) {
                 return true;            
        } 
    }
          return false
}
ngOnDestroy(): void {
this.unsub?.unsubscribe()
}
}
