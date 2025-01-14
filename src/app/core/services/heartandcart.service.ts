import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HeartandcartService {
private readonly _ToastrService=inject(ToastrService);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
clickedHeart(){
  if (isPlatformBrowser( this._PLATFORM_ID)) {
  if (localStorage.getItem('token')==null) {
    if (localStorage.getItem('lang')==null) {
      this._ToastrService.error("You aren't User Please Login" ,"Shopping Website")
    }
    if (localStorage.getItem('lang')!=null) {
      if (localStorage.getItem('lang')=='en') {
        this._ToastrService.error("You aren't User Please Login" ,"Shopping Website")
          }
      if (localStorage.getItem('lang')=='ar') {
            this._ToastrService.error("أنت لست مستخدم من فضلك قم بتسجيل الدخول" ,"متجر التسوق")
          }
    }
    }  
  }
  }
 
}
