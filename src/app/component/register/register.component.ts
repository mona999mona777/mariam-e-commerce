import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/servcies/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements  OnDestroy {
 private readonly _AuthService=inject(AuthService)
 private readonly _FormBuilder=inject(FormBuilder)
 private readonly _Router=inject(Router)


 messgerror:string=''
 messsuccess:string=''
 isloading:boolean=false
 unsub!:Subscription

/* register:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
  email:new FormControl(null,[Validators.required, Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  rePassword:new FormControl(null),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/) ])
},this.repassword);
 */


  // more easy way to creat form
register:FormGroup=this._FormBuilder.group({
      name:[null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      email:[null,[Validators.required, Validators.email]],
      password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
      rePassword:[null],
      phone:[null,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/) ]],
},{validators:this.repassword});


repassword(g:AbstractControl){
  if(g.get('password')?.value===g.get('rePassword')?.value){
  return null
  }
  else{
    return {mismatch:true}
  }
  }

  registerfunction(){
    // console.log(this.register);
    if(this.register.valid){
      this.isloading=true
        this.unsub=    this._AuthService.setregisterform(this.register.value).subscribe({
                  next:(res)=>{
                    this.messsuccess=res.message; 
                    this.messgerror=""
                 console.log(res);
                 this.isloading=false
                 if(res.message == "success"){
                setTimeout(() => {
                  this._Router.navigate(['/login']);
                }, 1000);
                 }
                  },
                  error:(err:HttpErrorResponse)=>{
                    console.log(err);
                    this.isloading=false
                  this.messgerror=err.error.message;
                  this.messsuccess="";
                  }
            });
    }
    else{
      // this.register.get('rePassword')?.setErrors({mismatch:true}) ;
     this.register.setErrors({mismatch:true})
      this.register.markAllAsTouched();
    }
  }


  ngOnDestroy(): void {
      this.unsub?.unsubscribe()
  }
}
