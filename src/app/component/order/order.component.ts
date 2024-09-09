import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../core/servcies/order.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit ,OnDestroy {
private readonly _OrderService=inject(OrderService);
private readonly _ActivatedRoute=inject(ActivatedRoute); 

isloading:boolean=false;
cartId!:string|null;
messgsuc!:string;
messgerr!:string;
unsub!:Subscription;
  orderForm:FormGroup=new FormGroup({
    details:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/)]),
    city:new FormControl(null,[Validators.required]),
  })

  ngOnInit(): void {
    // id 
    this.unsub=   this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
     this.cartId=  p.get('cartId');
    //  console.log( this.cartId)
      }
    })
    }
  orderFunc(){
if(this.orderForm.valid){
  this.isloading=true;

  this._OrderService.orderapi(this.cartId,this.orderForm.value).subscribe({
    next:(res)=>{
  console.log(res);
  this.isloading=false;
  this.messgsuc=res.status;
  if(res.status=='success'){
 window.open(res.session.url,"_self")
  }
  
    },
    error:(err)=>{
      console.log(err);
      this.messgerr=err.statusMsg
    }
  })
    }
    
    else{
      this.orderForm.markAllAsTouched();
    }
  }


  ngOnDestroy(): void {
      this.unsub?.unsubscribe()
  }
}





