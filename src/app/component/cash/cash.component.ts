import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../core/servcies/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cash',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './cash.component.html',
  styleUrl: './cash.component.scss'
})
export class CashComponent implements OnInit ,OnDestroy {
  private readonly _OrderService=inject(OrderService);
  private readonly _ActivatedRoute=inject(ActivatedRoute); 
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
      //  console.log( this.cartId)
        }
      })
      }
      cashOrderFunc(){
  if(this.cashOrderForm.valid){
    this.isloading=true;
  
    this._OrderService.cashOrderapi(this.cartId,this.cashOrderForm.value).subscribe({
      next:(res)=>{
    console.log(res);
    this.isloading=false;
    this.messgsuc=res.status;
    if(res.status=='success'){
     this._Router.navigate(['/allorders'])
       }
   
    
      },
    })
      }
      
      else{
        this.cashOrderForm.markAllAsTouched();
      }
    }
  
  
    ngOnDestroy(): void {
        this.unsub?.unsubscribe()
    }
  }
  
