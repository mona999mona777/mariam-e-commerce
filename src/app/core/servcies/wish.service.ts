import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {
private readonly _HttpClient=inject(HttpClient);
wishproductno:BehaviorSubject<any>=new BehaviorSubject(0);


  addTOWishList(id:string):Observable<any>{
    return  this._HttpClient.post(`${environment.baseUrl}/api/v1/wishlist`, {
        "productId": id
      },
      // header in interceptors and by config file 
      )
    }
    getUserWishList():Observable<any>{
      return this._HttpClient.get(`${environment.baseUrl}/api/v1/wishlist`,
       
      )
    }
    removeWishListIteam(id:string):Observable<any>{
      return this._HttpClient.delete(`${environment.baseUrl}/api/v1/wishlist/${id}`,
          
      )
    }

}
