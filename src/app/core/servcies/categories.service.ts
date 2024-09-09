import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 private readonly _HttpClient=inject(HttpClient);

getAllCategories():Observable<any>{
 return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories`)
}
getSpecificCategories(id:string){
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/${id}`)
}
}
