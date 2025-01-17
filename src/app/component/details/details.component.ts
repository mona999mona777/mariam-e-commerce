import { Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/servcies/products.service';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CarouselModule} from 'ngx-owl-carousel-o';
import { CartService } from '../../core/servcies/cart.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { HeartandcartService } from '../../core/services/heartandcart.service';
import { Icartproduct } from '../../core/interfaces/icartproduct';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule,TranslateModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent  implements OnInit , OnDestroy{
private readonly _ActivatedRoute=inject(ActivatedRoute); 
private readonly _ProductsService=inject(ProductsService);
private readonly _CartService=inject(CartService);
private readonly _HeartandcartService=inject(HeartandcartService);
private readonly _ToastrService=inject(ToastrService);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _Renderer2=inject(Renderer2);
detailsProduct:Iproduct |null=null;
unSubSpcificProduct!:Subscription;
unSubadd!:Subscription;
currentsrc:string='';
cartproducts:Icartproduct[]=[];
unSubAdd!:Subscription;
unSubAddWish!:Subscription;
unsubUpdate!:Subscription;
unsubgetUserCart!:Subscription;
@ViewChildren('container') container!:QueryList<ElementRef>
@ViewChild('car') car!:ElementRef
ngOnInit(): void {
    // id 
this._ActivatedRoute.paramMap.subscribe({
next:(p)=>{
let id=  p.get('id');
// calling api 
this.unSubSpcificProduct=this._ProductsService.spicificproduct(id).subscribe({
  next:(res)=>{
    this.detailsProduct=res.data;
    //  car    ====>    div
    if (isPlatformBrowser(this._PLATFORM_ID)) {
          if(localStorage.getItem('token')!=null){
          this.getUserCart();
    }}
},
})
}
})
}
addtocart(id:string){ 
  if (isPlatformBrowser(this._PLATFORM_ID)) {
  if(localStorage.getItem('token')!=null){
   this.unSubAdd= this._CartService.addTOCart(id).subscribe({
     next:(res)=>{
      if(res.status=='success'){
this.getUserCart();
      this._CartService.cartno.next(res.numOfCartItems);
      this._ToastrService.success(res.message," Shopping websit");
      }
    },
    })
  }}
}
getUserCart(){
this.unsubgetUserCart= this._CartService.getUsercart().subscribe({
next:(res)=>{
this.cartproducts=res.data.products;
this.cartcar();
},})
}
cartcar(){
for (let i = 0; i < this.cartproducts.length; i++) {
  if (this.cartproducts[i].product.id==this.car.nativeElement.id) {
     this.car.nativeElement.classList.add('d-none');
}
}
}
update(id:string , count:number){
  this.unsubUpdate= this._CartService.updatecartIteams(id,count).subscribe({
     next:(res)=>{
      this.cartproducts=res.data.products;
      this._CartService.cartno.next(res.numOfCartItems);
      this.notcartcar();
      this.cartcar();
           },
   })
}
notcartcar(){
for (let i = 0; i < this.cartproducts.length; i++) {
  if (!(this.cartproducts[i].product.id==this.car.nativeElement.id)) {
      this.car.nativeElement.classList.remove('d-none');
}
}
  if (this.cartproducts.length==0) {
    this.car.nativeElement.classList.remove('d-none');  
}
}
@ViewChild('swichImage') el!:ElementRef
clicked(source:string){
this.currentsrc=source;
this.el.nativeElement.src=source
}
@ViewChild('mm') show!:ElementRef
@ViewChild('ff') elem!:ElementRef
clickme(){
this.show.nativeElement.hidden=false;
this.elem.nativeElement.hidden=true
}
clickedHeart(){
 this._HeartandcartService.clickedHeart();
}
// lightercomp
ischeecked:boolean=false;
theCurentImg:string='';  
open(currentImg:string){
     this.ischeecked=true;
     this.theCurentImg= currentImg;
}
close(){
    this.ischeecked=false;
}
@ViewChild('light') lightcomp!:ElementRef
ligthfunc(e:Event){
   if(e.target==this.lightcomp.nativeElement){
    this.close()
    }
}
ngOnDestroy(): void {
this.unSubSpcificProduct?.unsubscribe();
this.unSubadd?.unsubscribe();
this.unSubAdd?.unsubscribe();
this.unSubAddWish?.unsubscribe();
this.unsubgetUserCart?.unsubscribe();
this.unsubUpdate?.unsubscribe();
}
}
