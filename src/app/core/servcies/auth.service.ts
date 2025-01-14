import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { WishService } from './wish.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // interface
userdata:any =null;

   private readonly _HttpClient=inject(HttpClient);
   private readonly _WishService=inject(WishService);
   private readonly _CartService=inject(CartService);
   private readonly _Router=inject(Router);


// 1.register api
setregisterform(data:object):Observable<any>{
 return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`,data)
}
// 2.login api
setloginform(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin`,data)
}

// 3.logout function
logout():void{
        localStorage.removeItem("token");
        this.userdata=null;
        this._WishService.wishproductno.next(0);
        this._CartService.cartno.next(0);


        //call api remove tooken (ان وجد api)
this._Router.navigate(['/home'])
}
// 4.forgetpassword api 
forgetpassword(data:object):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords
`,data)
}
// 5.verifyCode (send on email )api 
verifyCode(data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`,data)
}
// 6.creat new password api 
resetpassword(data:object):Observable<any>{
  return this._HttpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword`,data)
}


// 7.decode function: decodetoken and save user data 

  userId:string='';
decodetoken():void{
  if(localStorage.getItem("token")!==null)
    // install (jwtdecode) in terminal tok token as string and decoded it
  //  (! )=>jwtdecode took the token as string only  to tell it tooken will not be null put (!) or drfine as any (let m:any =localStorage.getItem("token"))
     
  
this.userdata=   jwtDecode(localStorage.getItem("token") !)
 this.userId=this.userdata.id;

// console.log(this.userdata)
// console.log(this.userId)
}

// 8.api of allorders
allorderapi():Observable<any>{
  this.decodetoken();
return this._HttpClient.get(`${environment.baseUrl}/api/v1/orders/user/${this.userId}`)
}

}
