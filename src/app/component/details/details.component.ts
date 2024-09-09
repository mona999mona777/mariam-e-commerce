import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/servcies/products.service';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../core/servcies/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent  implements OnInit , OnDestroy{
  private readonly _ActivatedRoute=inject(ActivatedRoute); 
  private readonly _ProductsService=inject(ProductsService);
  private readonly _CartService=inject(CartService);
  private readonly _ToastrService=inject(ToastrService);

  detailsProduct:Iproduct |null=null;
  unSubSpcificProduct!:Subscription;
  unSubadd!:Subscription;

theDetails: OwlOptions = {
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
  // responsive: {
  //   0: {
  //     items: 1
  //   },
  //   400: {
  //     items: 2
  //   },
  //   740: {
  //     items: 3
  //   },
  //   940: {
  //     items: 6
  //   }
  // },
  nav: false
}
ngOnInit(): void {
    // id 
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
    let id=  p.get('id');

    // calling api 
    this.unSubSpcificProduct=this._ProductsService.spicificproduct(id).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.detailsProduct=res.data;
        },
       
})
      }
    })
}
add(id:string){
this.unSubadd=  this._CartService.addTOCart(id).subscribe({
   next:(res)=>{
    console.log(res);

    this._ToastrService.success(res.message," DIOR websit");
   },
  
  })
}
ngOnDestroy(): void {
 this.unSubSpcificProduct?.unsubscribe();
 this.unSubadd?.unsubscribe();
  
}
}
