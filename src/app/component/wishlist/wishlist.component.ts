import { Component, inject, PLATFORM_ID } from '@angular/core';
import { WishService } from '../../core/servcies/wish.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Iwishlist } from '../../core/interfaces/iwishlist';
import { CartService } from '../../core/servcies/cart.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [TranslateModule ,RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
private readonly _WishService=inject(WishService);
private readonly _ToastrService=inject(ToastrService);
private readonly _CartService=inject(CartService);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
wishListData:Iwishlist[]=[]
numWishItems!:number
unsubgetUserCart!:Subscription;
unsubremove!:Subscription;
unSubAdd!:Subscription;
state:boolean=false;
ngOnInit() {
    this.unsubgetUserCart= this._WishService.getUserWishList().subscribe({
       next:(res)=>{
      this.wishListData=res.data;
      this.numWishItems=res.count;
    },
     })
}
remove(id:string){
this.unsubremove=this._WishService.removeWishListIteam(id).subscribe({
      next:(res)=>{
        // res contain(ids , meseage->tostar , status:success)
        this._ToastrService.success(res.message," DIOR websit");
        this.wishListData=[];
        this.unsubgetUserCart= this._WishService.getUserWishList().subscribe({
        next:(res)=>{
          // عشان اعرضها 
                  // res contain(data->to show in html ,count ,status:success )
            this.wishListData=res.data;
            this._WishService.wishproductno.next(res.count);
            this.numWishItems=res.count;
        },
    
  })
},
})
}
addTOCart(id:string){
    this.unSubAdd= this._CartService.addTOCart(id).subscribe({
      next:(res)=>{
      this._CartService.cartno.next(res.numOfCartItems);
       this._ToastrService.success(res.message," DIOR websit");
      },
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
    this.unsubgetUserCart.unsubscribe();
    this.unsubremove?.unsubscribe();
    this.unSubAdd?.unsubscribe();
}
}
