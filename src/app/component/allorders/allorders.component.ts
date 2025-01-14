import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/servcies/auth.service';
import { Iorder } from '../../core/interfaces/iorder';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [TranslateModule,DatePipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit,  OnDestroy{
  private readonly _AuthService=inject(AuthService);
  unallorder!:Subscription;
  alloreders!:Iorder[];
ngOnInit(): void {
this.unallorder=this._AuthService.allorderapi().subscribe({
      next:(res)=>{
   this.alloreders=res.reverse();
      },
     
    });
}
ngOnDestroy(): void {
    this.unallorder?.unsubscribe();
}
}
