import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BarndsService } from '../../core/servcies/barnds.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Ibrands } from '../../core/interfaces/ibrands';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-branddetails',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './branddetails.component.html',
  styleUrl: './branddetails.component.scss'
})
export class BranddetailsComponent implements OnInit, OnDestroy{

  private readonly _BarndsService=inject(BarndsService);
  private readonly _ActivatedRoute=inject(ActivatedRoute); 
  brandsData:Ibrands|null=null;
  unsubbrands!:Subscription
  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe({
    next:(Id)=>{
let id=Id.get('brandId');   
      this.unsubbrands=this._BarndsService.getspacificbransApi(id!).subscribe({
        next:(res)=>{
      this.brandsData=res.data;
        },
      })
    }
  })
  }
ngOnDestroy(): void{
    this.unsubbrands?.unsubscribe()
}
  }
