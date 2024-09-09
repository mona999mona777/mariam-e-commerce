import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/servcies/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy{
  private readonly _AuthService=inject(AuthService);
  private readonly _FormBuilder=inject(FormBuilder);
  private readonly _Router=inject(Router);


  messgerror:string='';
  messsuccess:string='';
  isloading:boolean=false;
  unsub!:Subscription;

/*   login:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  });
 */

  // more easy way to creat form
  login:FormGroup=this._FormBuilder.group({
  // email:this._FormBuilder.control(null,[Validators.required, Validators.email])  old way
  email:[null,[Validators.required, Validators.email]],
  password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]]
})
   
  loginfunction(){
      if(this.login.valid){
              this.isloading=true
           this.unsub= this._AuthService.setloginform(this.login.value).subscribe({
                            next:(res)=>{
                                        this.isloading=false;
                                         console.log(res);
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
                                        console.log(err);
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

    ngOnDestroy(): void {
      this.unsub?.unsubscribe()
  }

}
