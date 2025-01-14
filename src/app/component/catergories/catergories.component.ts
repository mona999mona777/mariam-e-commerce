import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategService } from '../../core/servcies/categ.service';
import { Subscription } from 'rxjs';
import { Icategory } from '../../core/interfaces/icategory';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-catergories',
  standalone: true,
  imports: [RouterLink,TranslateModule],
  templateUrl: './catergories.component.html',
  styleUrl: './catergories.component.scss'
})
export class CatergoriesComponent implements OnInit , OnDestroy {
  private readonly _CategService=inject(CategService);
  categData:Icategory[]|null=null;
unsubgetAllCategories!:Subscription;
unsubgetSpcificCategories!:Subscription;
ngOnInit() {
  this.unsubgetAllCategories=   this._CategService.getAllCategories().subscribe({
      next:(res)=>{
    this.categData=res.data;
      },
   
    });
}
getSpcificCategories(id:string){
  this._CategService.getSpecificCategories(id).subscribe({
    next:(res)=>{
    },
   
  })
}
ngOnDestroy(): void {
    this.unsubgetAllCategories?.unsubscribe();
    this.unsubgetSpcificCategories?.unsubscribe();
}

 
}
