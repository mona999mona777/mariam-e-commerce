import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategService {
private readonly _HttpClient=inject(HttpClient);

getAllCategoriesApi():Observable<any>{
return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories`);
}
getSpecificCategoriesApi(id:string|null):Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/${id}`);
  }

  getSOneCategoriesApi(id:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/${id}/subcategories`);
    }
  
}
