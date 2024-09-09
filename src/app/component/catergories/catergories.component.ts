import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategService } from '../../core/servcies/categ.service';
import { Subscription } from 'rxjs';
import { Icategory } from '../../core/interfaces/icategory';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catergories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catergories.component.html',
  styleUrl: './catergories.component.scss'
})
export class CatergoriesComponent implements OnInit , OnDestroy {
  private readonly _CategService=inject(CategService);
  categData:Icategory[]|null=null;
unsubgetAllCategories!:Subscription;
unsubgetSpcificCategories!:Subscription;

ngOnInit() {
  this.unsubgetAllCategories=   this._CategService.getAllCategoriesApi().subscribe({
      next:(res)=>{
    console.log(res.data);
    this.categData=res.data;
      },
   
    });
  
 
}
getSpcificCategories(id:string){
  this._CategService.getSpecificCategoriesApi(id).subscribe({
    next:(res)=>{
  console.log(res)
    },
   
  })
}
ngOnDestroy(): void {
    this.unsubgetAllCategories?.unsubscribe();
    this.unsubgetSpcificCategories?.unsubscribe();

}

 
}
