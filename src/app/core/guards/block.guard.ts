import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const blockGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router);

                       // you havenot token
       if(typeof localStorage!=='undefined'){
                    if( localStorage.getItem("token") == null){
                      return true;
                    }
                  
                  else{
                         // navigate to home
                      _Router.navigate(['/home'])
                      return false;

                    }

       }


   else{
   return false;
   }

};

