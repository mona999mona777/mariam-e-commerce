import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
const _Router=inject(Router);

         // you have token
         if(typeof localStorage!=='undefined'){
          
                      if( localStorage.getItem("token") !== null){
                             return true
                      }
                      else{
                        // navigate to login
                          _Router.navigate(['/login'])
                            return false;
                      }
  }



  else{
    return false;
  }
};
