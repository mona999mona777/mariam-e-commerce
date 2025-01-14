import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../core/servcies/order.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit ,OnDestroy {
private readonly _OrderService=inject(OrderService);
private readonly _ActivatedRoute=inject(ActivatedRoute); 
private readonly _PLATFORM_ID=inject(PLATFORM_ID); 

isloading:boolean=false;
cartId!:string|null;
messgsuc!:string;
messgerr!:string;
unsub!:Subscription;
unsuborder!:Subscription;
orderForm:FormGroup=new FormGroup({
details:new FormControl(null,[Validators.required]),
phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/)]),
city:new FormControl(null,[Validators.required]),
})
ngOnInit(): void {
// id 
this.unsub= this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
     this.cartId=  p.get('cartId');
    //  console.log( this.cartId)
      }
})
}
orderFunc(){
if(this.orderForm.valid){
this.isloading=true;
this.unsuborder=this._OrderService.orderapi(this.cartId,this.orderForm.value).subscribe({
    next:(res)=>{
  this.isloading=false;
  this.messgsuc=res.status;
  if(res.status=='success'){
 window.open(res.session.url,"_self")
  }
    },
})
}
else{
      this.orderForm.markAllAsTouched();
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
this.unsub?.unsubscribe();
this.unsuborder?.unsubscribe();
}
}