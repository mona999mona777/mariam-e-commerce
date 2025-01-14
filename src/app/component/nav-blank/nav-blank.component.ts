import { Component, ElementRef, inject, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/servcies/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/servcies/mytranslate.service';
import { CartService } from '../../core/servcies/cart.service';
import { Subscription } from 'rxjs';
import { WishService } from '../../core/servcies/wish.service';
import { isPlatformBrowser } from '@angular/common';
import { HeartandcartService } from '../../core/services/heartandcart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit{
  readonly _AuthService=inject(AuthService);
 private readonly _MytranslateService=inject(MytranslateService);
 private readonly _HeartandcartService=inject(HeartandcartService);
 readonly _CartService=inject(CartService);
 readonly _WishService=inject(WishService);
 readonly _Renderer2=inject(Renderer2);
 private readonly _PLATFORM_ID=inject(PLATFORM_ID);
 readonly _TranslateService=inject(TranslateService);
  cartnumber:number=0;
  count:number=0;
  unsubgetUserCart!:Subscription;
  wishproduct!:Subscription;
  usercart!:Subscription;
  cartnumb!:Subscription;
  @ViewChild ('navbarSupportedContent') navbarSupportedContent!:ElementRef
ngOnInit() {
if (isPlatformBrowser(this._PLATFORM_ID)) {
    if(localStorage.getItem('token')!=null){
this.unsubgetUserCart= this._WishService.getUserWishList().subscribe({
      next:(res)=>{
     this._WishService.wishproductno.next(res.count);
      },
})
}}
if (isPlatformBrowser(this._PLATFORM_ID)) {
if(localStorage.getItem('token')!=null){
    this.wishproduct=this._WishService.wishproductno.subscribe({
    next:(num)=>{
this.count=num;
    }
});
}}
if (isPlatformBrowser(this._PLATFORM_ID)) {
if(localStorage.getItem('token')!=null){
this.usercart= this._CartService.getUsercart().subscribe({
      next:(res)=>{
  this._CartService.cartno.next(res.numOfCartItems);
},
      
})
}}
if (isPlatformBrowser(this._PLATFORM_ID)) {
if(localStorage.getItem('token')!=null){
this.cartnumb=this._CartService.cartno.subscribe({
      next:(num)=>{
this.cartnumber=num;
      }
})
}}
//translations
if (isPlatformBrowser(this._PLATFORM_ID)) {
if(localStorage.getItem('lang')!=null){
this._MytranslateService.useChoiceLang();
} 
}
}
change(lang:string):void {
this._MytranslateService.changeLang(lang);
}
VisiableAndHidden(){
  if (isPlatformBrowser(this._PLATFORM_ID)) {
   if (localStorage.getItem("token")==null) {
      return false;            
    } 
  else if (localStorage.getItem("token")!=null) {
        return true;
  } 
  }
        return false
}
closeIteamModal(){
  if (this.navbarSupportedContent.nativeElement.classList.contains("show")) {
    this._Renderer2.removeClass(this.navbarSupportedContent.nativeElement,'show')  
}}
clickedHeart(){
  this._HeartandcartService.clickedHeart();
}
}