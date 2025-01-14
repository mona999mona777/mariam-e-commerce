import { Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ProductsService } from '../../core/servcies/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { Icategory } from '../../core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { TheSeachPipe } from '../../core/pipes/the-seach.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/servcies/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishService } from '../../core/servcies/wish.service';
import { CategService } from '../../core/servcies/categ.service';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { HeartandcartService } from '../../core/services/heartandcart.service';
import { Icartproduct } from '../../core/interfaces/icartproduct';
import { Icart } from '../../core/interfaces/icart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,RouterLink,TheSeachPipe,FormsModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
private readonly _CategService=inject(CategService)
private readonly _ProductsService=inject(ProductsService);
private readonly _CartService=inject(CartService);
private readonly _WishService=inject(WishService);
 private readonly _HeartandcartService=inject(HeartandcartService);
private readonly _ToastrService=inject(ToastrService);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _Renderer2=inject(Renderer2);
Electronics:string= "Electronics";
Women:string= "Women's Fashion";
meansfashion:string= "Men's Fashion";
categoryList:Icategory[]=[];
productList:Iproduct[]=[];
innerwishList:Iproduct[]=[];
addwishId:[]=[];
removewishId:[]=[];
cartproducts:Icartproduct[]=[];
cartData:Icart={} as Icart;
cartproductId!:string;
cartproductCount!:number;
unsubproduct!:Subscription;
unsubcategories!:Subscription;
unSubAdd!:Subscription;
unsubremove!:Subscription;
unSubAddWish!:Subscription;
unsubgetUserwishList!:Subscription;
unsubUpdate!:Subscription;
unsubgetUserCart!:Subscription;
@ViewChildren('prod') theProduct!:QueryList<ElementRef>
@ViewChildren('container') container!:QueryList<ElementRef>
@ViewChildren('cars') cars!:QueryList<ElementRef>
customOptionsMain: OwlOptions = {
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  loop: true,
  rtl:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  items: 1,
  nav: false
}
customOptionscat: OwlOptions = {
  // autoplay:true,
  // autoplayTimeout:100,
  // autoplayHoverPause:true,
  loop: true,
  rtl:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],//pre, next
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 4
    },
    740: {
      items: 6
    },
    940: {
      items: 8
    }
  },
  nav: false //true
}
recomended: OwlOptions = {
  // autoplay:true,
  // autoplayTimeout:100,
  // autoplayHoverPause:true,
  loop: true,
  rtl:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],//pre, next
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 6
    }
  },
  nav: false //true
}
ngOnInit(): void {
this.unsubcategories= this._CategService.getAllCategories().subscribe({
    next:(res)=>{
  this.categoryList=res.data;
    },
})
// allproduct===>12
this.unsubproduct= this._ProductsService.allproduct().subscribe({
                next:(res)=>{
                  this.productList=res.data;
//car    ====>    div
if (isPlatformBrowser(this._PLATFORM_ID)) {
  if(localStorage.getItem('token')!=null){
   this.getUserCart();
  }}
// get User Wish List
if (isPlatformBrowser(this._PLATFORM_ID)) {
if(localStorage.getItem('token')!=null){
this.unsubgetUserwishList= this._WishService.getUserWishList().subscribe({
                    next:(res)=>{
                  this.innerwishList=res.data;
                  this.element();
                  },
})
}}
},
})
}
element():void{
      this.theProduct.forEach((el)=>{
        for (let i = 0; i < this.innerwishList.length; i++) {
          if (this.innerwishList[i]._id==el.nativeElement.id) {
            el.nativeElement.classList.remove("fa-regular")
            el.nativeElement.classList.add("fa-solid")
          
          }
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
this.cars.forEach((el)=>{
for (let i = 0; i < this.cartproducts.length; i++) {
  if (this.cartproducts[i].product.id==el.nativeElement.id) {
     el.nativeElement.classList.add('d-none');
}
  }
})
}
chngecolor(e:Event , id:string){
const input =e.target as HTMLInputElement;
if (  input.classList.contains("fa-regular")) {
if (isPlatformBrowser(this._PLATFORM_ID)) {
if(localStorage.getItem('token')!=null){
      this.unSubAddWish= this._WishService.addTOWishList(id).subscribe({
        next:(res)=>{
         this.addwishId=res.data;
          this.theProduct.forEach((el)=>{
        for (let i = 0; i < this.addwishId.length; i++) {
          if (this.addwishId[i]==el.nativeElement.id) {
            el.nativeElement.classList.remove("fa-regular")
            el.nativeElement.classList.add("fa-solid")
          }
        }
      })
         this._WishService.wishproductno.next(res.data.length);
         this._ToastrService.success(res.message," Shopping websit");
        },
       })
}}    
}
else if (  input.classList.contains("fa-solid")) {
      this.unsubremove=this._WishService.removeWishListIteam(id).subscribe({
        next:(res)=>{
          if (res.status== 'success') {
            this.theProduct.forEach((el)=>{
              if (el.nativeElement.id==id) {
                el.nativeElement.classList.remove("fa-solid")
                el.nativeElement.classList.add("fa-regular")
              }
      })
                }
       this._WishService.wishproductno.next(res.data.length);
       this._ToastrService.success(res.message," Shopping websit");
    },
      })
}
}
clickedHeart(){
  this._HeartandcartService.clickedHeart();
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
  this.cars.forEach((el)=>{
    for (let i = 0; i < this.cartproducts.length; i++) {
    if (!(this.cartproducts[i].product.id==el.nativeElement.id) ) {
       el.nativeElement.classList.remove('d-none');  

      }
    }
  })
  this.cars.forEach((el)=>{
  if (this.cartproducts.length==0) {
    el.nativeElement.classList.remove('d-none');  
}
})
}
textlag(){
  if (isPlatformBrowser(this._PLATFORM_ID)) {
  if (localStorage.getItem("lang")!=null) {
       if (localStorage.getItem("lang")=='en') {
        return true;
       }
       else if (localStorage.getItem("lang")=='ar') {
        return false;
       }
  } 
  else if (localStorage.getItem("lang")==null) {
               return true;            
      } 
  }
        return false
}
ngOnDestroy(): void {
this.unsubcategories?.unsubscribe();
this.unsubproduct?.unsubscribe();
this.unSubAdd?.unsubscribe();
this.unSubAddWish?.unsubscribe();
this.unsubremove?.unsubscribe();
this.unsubgetUserwishList?.unsubscribe();
this.unsubgetUserCart?.unsubscribe();
this.unsubUpdate?.unsubscribe();
}
}