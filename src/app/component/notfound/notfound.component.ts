import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MytranslateService } from '../../core/servcies/mytranslate.service';
import { isPlatformBrowser, Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent implements OnInit{
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _MytranslateService=inject(MytranslateService);
private readonly  _Location=inject(Location);
ngOnInit(): void {
          //translations
if (isPlatformBrowser(this._PLATFORM_ID)) {
        if(localStorage.getItem('lang')!=null){
          this._MytranslateService.useChoiceLang();
              } 
}
} 
back(){
    this._Location.back();
}
}
 
