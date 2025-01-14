import { Icart } from './../../core/interfaces/icart';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../core/servcies/cart.service';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,TranslateModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy{
private readonly _CartService=inject(CartService);
cartData:Icart={} as Icart;
unsubgetUserCart!:Subscription
unsubremove!:Subscription
unsubUpdate!:Subscription
unsubClear!:Subscription
ngOnInit() {
 this.unsubgetUserCart= this._CartService.getUsercart().subscribe({
    next:(res)=>{
      console.log(res)
this.cartData=res.data;
    },
    
  })
  }
remove(id:string){
  this.unsubremove=this._CartService.removecartIteam(id).subscribe({
    next:(res)=>{
      this.cartData=res.data;
      this._CartService.cartno.next(res.numOfCartItems);
          },
  })
}
update(id:string , count:number){
 this.unsubUpdate= this._CartService.updatecartIteams(id,count).subscribe({
    next:(res)=>{
      this.cartData=res.data;
      this._CartService.cartno.next(res.numOfCartItems);
          },
  })
}
clearALLCart():void{
 this.unsubClear= this._CartService.clearUsercart().subscribe({
    next:(res)=>{
      this._CartService.cartno.next(0);
      if(res.message=="success"){
        this.cartData={} as Icart
      }
          },
  })
}
ngOnDestroy(): void {
  this.unsubgetUserCart.unsubscribe();
  this.unsubremove?.unsubscribe();
  this.unsubUpdate?.unsubscribe();
  this.unsubClear?.unsubscribe();

}
}
