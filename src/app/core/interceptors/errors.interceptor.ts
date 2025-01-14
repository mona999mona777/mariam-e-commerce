import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  const _PLATFORM_ID=inject(PLATFORM_ID)
 let  _ToastrService=inject(ToastrService);
  return next(req).pipe(catchError((err)=>{
    console.log('errorInterceptors',err.error.message);
    if (isPlatformBrowser(_PLATFORM_ID)) {
    if(localStorage.getItem('lang')!=null){
      if (localStorage.getItem("lang")=='en') {
      _ToastrService.error(err.error.message ,"Shopping Website")
      }
     else if (localStorage.getItem("lang")=='ar') {
      _ToastrService.error(err.error.message ,"متجر التسوق")
      }
    }
    if(localStorage.getItem('lang')==null){
      _ToastrService.error(err.error.message ,"Shopping Website")
      }
    }
return throwError(()=>err)
  }))
};
