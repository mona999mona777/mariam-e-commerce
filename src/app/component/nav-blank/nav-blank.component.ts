import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/servcies/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/servcies/mytranslate.service';
import { CartService } from '../../core/servcies/cart.service';
import { Subscription } from 'rxjs';
import { WishService } from '../../core/servcies/wish.service';

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
  readonly _TranslateService=inject(TranslateService);
  readonly _CartService=inject(CartService);
  readonly _WishService=inject(WishService);
  cartnumber:number=0;
  count:number=0;
  unsubgetUserCart!:Subscription;

  change(lang:string):void{
this._MytranslateService.changelang(lang);
  }
  ngOnInit() {
 this.unsubgetUserCart= this._WishService.getUserWishList().subscribe({
      next:(res)=>{
     console.log("reeeeee",res.count);
     this._WishService.wishproductno.next(res.count);
      },
      
    })

 this._WishService.wishproductno.subscribe({
    next:(num)=>{
this.count=num;
console.log('num', num)
    }
  });

    this.unsubgetUserCart= this._CartService.getUsercart().subscribe({
      next:(res)=>{
  console.log("numOf Cart Items = ",res.numOfCartItems);
  this._CartService.cartno.next(res.numOfCartItems);
},
      
    })

    this._CartService.cartno.subscribe({
      next:(num)=>{
this.cartnumber=num;
      }
    })

    }
}
