import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../core/servcies/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../core/servcies/cart.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cash',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './cash.component.html',
  styleUrl: './cash.component.scss'
})
export class CashComponent implements OnInit ,OnDestroy {
private readonly _OrderService=inject(OrderService);
private readonly _CartService=inject(CartService);
private readonly _ActivatedRoute=inject(ActivatedRoute); 
private readonly _PLATFORM_ID=inject(PLATFORM_ID); 
private readonly _Router=inject(Router); 
isloading:boolean=false;
cartId!:string|null;
messgsuc!:string;
messgerr!:string;
unsub!:Subscription;
cashOrderForm:FormGroup=new FormGroup({
      details:new FormControl(null,[Validators.required]),
      phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/)]),
      city:new FormControl(null,[Validators.required]),
})
ngOnInit(): void {
      // id 
      this.unsub=   this._ActivatedRoute.paramMap.subscribe({
        next:(p)=>{
       this.cartId=  p.get('cartId');
        }
      })
}
cashOrderFunc(){
  if(this.cashOrderForm.valid){
    this.isloading=true;
    this._OrderService.cashOrderapi(this.cartId,this.cashOrderForm.value).subscribe({
      next:(res)=>{
    this.isloading=false;
    this.messgsuc=res.status;
    if(res.status=='success'){
      this._CartService.cartno.next(0);
     this._Router.navigate(['/allorders'])
       }
      },
    })
      }
  else{
        this.cashOrderForm.markAllAsTouched();
  }
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
        this.unsub?.unsubscribe()
}
  }
  
