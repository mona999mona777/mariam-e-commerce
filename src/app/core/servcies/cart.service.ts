import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartno:BehaviorSubject<number>=new BehaviorSubject(0);
private readonly _HttpClient=inject(HttpClient);
myHeaders:any= {token:localStorage.getItem("token")}

addTOCart(id:string):Observable<any>{
return  this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`, {
    "productId": id
  },
  // header in interceptors and by config file 
  )
}
getUsercart():Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`,
   
  )
}
removecartIteam(id:string):Observable<any>{
  return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`,
      
  )
}
updatecartIteams(id:string, count:number):Observable<any>{
  return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`,
    {
      "count": `${count}`
     },
   
  )
}
clearUsercart():Observable<any>{
  return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`,
   
  )
}

}
