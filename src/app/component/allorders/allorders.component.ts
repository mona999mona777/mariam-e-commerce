import { RouterLink } from '@angular/router';
import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../core/servcies/auth.service';
import { Iorder } from '../../core/interfaces/iorder';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [TranslateModule,DatePipe,RouterLink],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit,  OnDestroy{
  private readonly _AuthService=inject(AuthService);
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  unallorder!:Subscription;
  alloreders!:Iorder[];
ngOnInit(): void {
this.unallorder=this._AuthService.allorderapi().subscribe({
      next:(res)=>{
   this.alloreders=res.reverse();
      },
     
    });
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
    this.unallorder?.unsubscribe();
}
}
