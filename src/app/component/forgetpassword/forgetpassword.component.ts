import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/servcies/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  private readonly _AuthService=inject(AuthService);
  private readonly _Router=inject(Router);

isloading:boolean=false;
forgetMessage:string='';
codeMessage:string='';
newpassMessage:string='';

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

    console.log(res);
    this.forgetMessage=res.statusMsg;
    if (res.statusMsg=="success") {
      setTimeout(() => {
        this.setp=2;
      }, 1000);
    }
  },
 
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
  this.codeMessage=res.status;

      console.log(res);
      if (res.status=="Success") {
        setTimeout(() => {
          this.setp=3;

        }, 1000);
      }
    },
  
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
  this.newpassMessage="Success";
  setTimeout(() => {
    localStorage.setItem("token",res.token);
    this._Router.navigate(["/home"])
  }, 1000);
    },
    
  })
}

ngOnDestroy(): void {
 this.unsubforgetpass?.unsubscribe();
  this.unsubverifyCode?.unsubscribe();
  this.unsubresetpassword?.unsubscribe();
}
}
