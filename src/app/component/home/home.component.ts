import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/servcies/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/servcies/categories.service';
import { Icategory } from '../../core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { TheSeachPipe } from '../../core/pipes/the-seach.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/servcies/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { WishService } from '../../core/servcies/wish.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,RouterLink,TheSeachPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _CategoriesService=inject(CategoriesService)
  private readonly _ProductsService=inject(ProductsService);
  private readonly _CartService=inject(CartService);
  private readonly _ToastrService=inject(ToastrService);
  private readonly _NgxSpinnerService=inject(NgxSpinnerService);
private readonly _WishService=inject(WishService);

  searhValue:string='';
  productList:Iproduct[]=[];
  categoryList:Icategory[]=[];
  unsubproduct!:Subscription;
  unsubcategories!:Subscription;
  unSubAdd!:Subscription;
  unSubAddWish!:Subscription;
idWishList:[]=[];
click:boolean=false;
mm:boolean=false;
dataId:[]=[];
dataWithId:Iproduct[]=[]
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
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: false
}

ngOnInit(): void {


  // allcategories
  this.unsubcategories= this._CategoriesService.getAllCategories().subscribe({
    next:(res)=>{

  console.log(res.data);
  this.categoryList=res.data;
    },
  })
  // allproduct===>12
  this.unsubproduct= this._ProductsService.allproduct().subscribe({
              next:(res)=>{
            console.log(res.data)
            this.productList=res.data;
              },
})
this._WishService.clicked.subscribe({
  next:(num)=>{
this.click=num;
  }
});
this.unsubproduct= this._WishService.iddata.subscribe({
  next:(res)=>{
console.log("open",res)
this.dataId=res;
  },
})

this._WishService.getUserWishList().subscribe({
  next:(mm)=>{
console.log("all",mm.data)
this.dataWithId=mm.data;
  }
})


  }
  heart(){
  
  }
add(id:string){
 this.unSubAdd= this._CartService.addTOCart(id).subscribe({
   next:(res)=>{
    console.log(res);
    this._CartService.cartno.next(res.numOfCartItems);
    console.log(res.numOfCartItems);

    this._ToastrService.success(res.message," DIOR websit");
   },
  })
}
addWish(id:string){
  this.unSubAdd= this._WishService.addTOWishList(id).subscribe({
    next:(res)=>{
     console.log("res",res);
     console.log(res.data)
     if (res.status=='success') {
      this._WishService.clicked.next(true);
      this._WishService.iddata.next(res.data);
    }
     this._WishService.wishproductno.next(res.data.length);
     this._ToastrService.success(res.message," DIOR websit");
    },
   })
 }
ngOnDestroy(): void {
  this.unsubcategories?.unsubscribe();
  this.unsubproduct?.unsubscribe();
  this.unSubAdd?.unsubscribe();
  this.unSubAddWish?.unsubscribe();

}
}



