import { CategService } from './../../core/servcies/categ.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ionecategory } from '../../core/interfaces/icategory';

@Component({
  selector: 'app-onecategory',
  standalone: true,
  imports: [],
  templateUrl: './onecategory.component.html',
  styleUrl: './onecategory.component.scss'
})
export class OnecategoryComponent implements OnInit , OnDestroy {
private readonly _ActivatedRoute=inject(ActivatedRoute); 
private readonly _CategService=inject(CategService); 
onCtaegoryData:Ionecategory[]=[];
unsub!:Subscription;
unsubcategory!:Subscription
cartegoryId!:string|null;
ngOnInit(): void {
    // id 
this.unsub=this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
     this.cartegoryId=  p.get('cartId');
      }
})
this.unsubcategory=this._CategService.getSOneCategories( this.cartegoryId).subscribe({
      next:(res)=>{
    this.onCtaegoryData=res.data;
      },
     
})
}
ngOnDestroy(): void {
this.unsub?.unsubscribe();
this.unsubcategory?.unsubscribe();
}
}
