import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BarndsService } from '../../core/servcies/barnds.service';
import { Subscription } from 'rxjs';
import { Ibrands } from '../../core/interfaces/ibrands';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit, OnDestroy {
  private readonly _BarndsService=inject(BarndsService);
  brandsData:Ibrands[]|null=null;
  unsubbrands!:Subscription
  ngOnInit(): void {
      this.unsubbrands=this._BarndsService.getAllCategoriesApi().subscribe({
        next:(res)=>{
      console.log(res.data);
      this.brandsData=res.data;
        },
  
      })
  }

ngOnDestroy(): void{
    this.unsubbrands?.unsubscribe()
}

}
