import './polyfills.server.mjs';
import{a as i}from"./chunk-JNO7ST2A.mjs";import{w as s}from"./chunk-LDSOU5NY.mjs";import{S as o,Y as n}from"./chunk-ILMFCX3N.mjs";var m=(()=>{let t=class t{constructor(){this._HttpClient=n(s)}getAllCategoriesApi(){return this._HttpClient.get(`${i.baseUrl}/api/v1/categories`)}getSpecificCategoriesApi(e){return this._HttpClient.get(`${i.baseUrl}/api/v1/categories/${e}`)}getSOneCategoriesApi(e){return this._HttpClient.get(`${i.baseUrl}/api/v1/categories/${e}/subcategories`)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{m as a};
