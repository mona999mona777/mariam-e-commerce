import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private readonly _HttpClient=inject(HttpClient);
myHeaders:any= {token:localStorage.getItem("token")}


  // header in interceptors and by config file 


orderapi(id:string|null,data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${id}?url=${environment.urlServer}`,
    {
      "shippingAddress":data
    },
 
)
}
cashOrderapi(id:string|null,data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/${id}`,
    {
      "shippingAddress":data
    },
  
  )
}



}
