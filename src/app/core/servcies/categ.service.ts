import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategService {
private readonly _HttpClient=inject(HttpClient);

getAllCategories():Observable<any>{
return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories`);
}
getSpecificCategories(id:string|null):Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/${id}`);
  }

  getSOneCategories(id:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/${id}/subcategories`);
    }
  
}
