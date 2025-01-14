import { Component, inject } from '@angular/core';
import { WishService } from '../../core/servcies/wish.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Iwishlist } from '../../core/interfaces/iwishlist';
import { CartService } from '../../core/servcies/cart.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

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
wishListData:Iwishlist[]=[]
unsubgetUserCart!:Subscription;
unsubremove!:Subscription;
unSubAdd!:Subscription;
state:boolean=false;
ngOnInit() {
    this.unsubgetUserCart= this._WishService.getUserWishList().subscribe({
       next:(res)=>{
      this.wishListData=res.data;
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
ngOnDestroy(): void {
    this.unsubgetUserCart.unsubscribe();
    this.unsubremove?.unsubscribe();
    this.unSubAdd?.unsubscribe();
}
}
