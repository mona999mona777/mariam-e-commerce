import { environment } from './../environment/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _HttpClient=inject(HttpClient);

  allproduct():Observable<any>{
   return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`)
  }
  spicificproduct(id:string|null):Observable<any>{
   return this._HttpClient.get(`${environment.baseUrl}/api/v1/products/${id}`)
  }
}
