import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BarndsService } from '../../core/servcies/barnds.service';
import { Subscription } from 'rxjs';
import { Ibrands } from '../../core/interfaces/ibrands';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink,TranslateModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit, OnDestroy {
  private readonly _BarndsService=inject(BarndsService);
  brandsData:Ibrands[]|null=null;
  unsubbrands!:Subscription
  ngOnInit(): void {
      this.unsubbrands=this._BarndsService.getAllbrandsApi().subscribe({
        next:(res)=>{
      this.brandsData=res.data;
        },
      })
  }
ngOnDestroy(): void{
    this.unsubbrands?.unsubscribe()
}

}
