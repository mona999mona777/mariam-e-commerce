import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/servcies/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MytranslateService } from '../../core/servcies/mytranslate.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent implements OnInit, OnDestroy {
  private readonly _AuthService=inject(AuthService);
  private readonly _Router=inject(Router);
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  private readonly _MytranslateService=inject(MytranslateService);
isloading:boolean=false;
forgetSuccessMessage:string='';
forgetErrorMessage:string='';
codeSuccessMessage:string='';
codeErrorMessage:string='';
newpasSuccessMessage:string='';
setp:number=1;
unsubforgetpass!:Subscription;
unsubverifyCode!:Subscription;
unsubresetpassword!:Subscription;
// 1.forget password
verifyEmailform:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})
verifyEmailFunc(){
this.isloading=true;
let  emailvalue= this.verifyEmailform.value.email;
this.resetpasswordform.get("email")?.patchValue(emailvalue);
this.unsubforgetpass=this._AuthService.forgetpassword(this.verifyEmailform.value).subscribe({
  next:(res)=>{
  this.isloading=false;
  this.forgetErrorMessage='';
    this.forgetSuccessMessage=res.statusMsg+' , '+res.message;
    if (res.statusMsg=="success") {
      setTimeout(() => {
        this.setp=2;
      }, 2000);
    }
  },
  error:(err)=>{
    this.forgetSuccessMessage='';
    this.forgetErrorMessage="error"+" , "+err.error.message;
  this.isloading=false;
  }
})
}
// 2.verifyCode send on email
verifyCodeform:FormGroup=new FormGroup({
  resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6,}$/)])
})
verifyCodeFunc(){
  this.isloading=true;
 this.unsubverifyCode= this.unsubforgetpass=this._AuthService.verifyCode(this.verifyCodeform.value).subscribe({
    next:(res)=>{
  this.isloading=false;
  this.codeSuccessMessage=res.status;
  this.codeErrorMessage='';
      if (res.status=="Success") {
        setTimeout(() => {
          this.setp=3;
        }, 2000);
      }
    },
    error:(err)=>{
      this.codeSuccessMessage='';
      this.codeErrorMessage=err.error.message+" , "+'try again';
    this.isloading=false;
    }
  })
}
// 3.creat new password
resetpasswordform:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[\w]{6,}$/)])
})
resetpasswordFunc(){
this.isloading=true;
this.unsubresetpassword=  this.unsubforgetpass=this._AuthService.resetpassword(this.resetpasswordform.value).subscribe({
    next:(res)=>{
  this.isloading=false;
  this.newpasSuccessMessage="Success";
  setTimeout(() => {
    localStorage.setItem("token",res.token);
    this._Router.navigate(["/home"])
  }, 2000);
    },
  })
}
ngOnInit(): void {
        //translations
if (isPlatformBrowser(this._PLATFORM_ID)) {
      if(localStorage.getItem('lang')!=null){
        this._MytranslateService.useChoiceLang();
            } 
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
 this.unsubforgetpass?.unsubscribe();
  this.unsubverifyCode?.unsubscribe();
  this.unsubresetpassword?.unsubscribe();
}
}
