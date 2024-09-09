import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../core/servcies/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Iproduct } from '../../core/interfaces/iproduct';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CarouselModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnDestroy{
  private readonly _ProductsService=inject(ProductsService);
  // null عشان ميعرض الهيكل او الشكل يعني غير لما ال ابي اي يجب الداتا  
  productData:Iproduct[]|null=null;
  unsubproduct!:Subscription

  theProductData: OwlOptions = {
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop: true,
    rtl:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false
  }

  ngOnInit(): void {
      this.unsubproduct=this._ProductsService.allproduct().subscribe({
        next:(res)=>{
            console.log(res.data);
            this.productData=res.data;
        },
  
      })
  }
ngOnDestroy(): void{
    this.unsubproduct?.unsubscribe()
}


}


 