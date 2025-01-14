import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/servcies/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MytranslateService } from '../../core/servcies/mytranslate.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit, OnDestroy {
 private readonly _AuthService=inject(AuthService);
 private readonly _FormBuilder=inject(FormBuilder);
 private readonly _Router=inject(Router);
   private readonly _PLATFORM_ID=inject(PLATFORM_ID);
     private readonly _MytranslateService=inject(MytranslateService);
 messgerror:string=''
 messsuccess:string=''
 isloading:boolean=false
 unsub!:Subscription
  // more easy way to creat form
register:FormGroup=this._FormBuilder.group({
      name:[null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      email:[null,[Validators.required, Validators.email]],
      password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
      rePassword:[null],
      phone:[null,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/) ]],
},{validators:this.repassword});
// repassword ==>function took data with type AbstractControl and named g
// g ==>variable represented registerform  (اي اسم مش لازم جي )
// AbstractControl ==>FormControl, FormGroup (عشان اطبق function  دي علي (form) or (control) and dont get error )
repassword(g:AbstractControl){
  if(g.get('password')?.value===g.get('rePassword')?.value){
  return null
  }
  else{
    // mismatch ==> كلها registerده هيتحط علي ال 
    return {mismatch:true}
  }
}
ngOnInit(): void {
        //translations
if (isPlatformBrowser(this._PLATFORM_ID)) {
   if(localStorage.getItem('lang')!=null){
     this._MytranslateService.useChoiceLang();
      } 
}
}
registerfunction(){
    // button==>[disabled]="register.invaild || isloading"======>htmlده ممكن يتغير عادي المستخدم يشيله من 
    // if and else==>to prevent user send data to api (backend)الا لو كانت صحيحه بالكامل و مفيش ايرور علي اي input 
if(this.register.valid){
    this.isloading=true
    this.unsub=this._AuthService.setregisterform(this.register.value).subscribe({
                      next:(res)=>{
                        this.messsuccess=res.message; 
                        this.messgerror=""
                    this.isloading=false
                    if(res.message == "success"){
                    setTimeout(() => {
                      this._Router.navigate(['/SiginIn']);
                    }, 1000);
                    }
                      },
                      error:(err:HttpErrorResponse)=>{
                        this.isloading=false
                      this.messgerror=err.error.message;
                      this.messsuccess="";
                      }
    });
}
else{
      // this.register.get('rePassword')?.setErrors({mismatch:true}) ;
      // repassword  من الاول register عشان احنا حطين ايرور علي ال
     this.register.setErrors({mismatch:true})
      this.register.markAllAsTouched();
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
