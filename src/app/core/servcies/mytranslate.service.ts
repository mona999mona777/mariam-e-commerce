import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MytranslateService {
private readonly _TranslateService=inject(TranslateService);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
// Renderer2: وهكذا فبستخدمها بس(document.documentElement.dir)بستخدمها عان مش احسن حاجه اتعمل مع الدوم علي طول زي جافا اسكريبت 
// create instnce RendererFactory2     عشان استخدمها مينفعش استخدمها بشكل مباشر  جوا سيرفز
private readonly _Renderer2=inject(RendererFactory2).createRenderer(null,null);


  constructor() {
 if(isPlatformBrowser(this._PLATFORM_ID)){
            //  1. set defualt lang:عشان اي ايرور 
            // 2.use new lang :
            this._TranslateService.setDefaultLang('en');
            // 3. chage direction:
            this.changeDirection('en');
 }
}
// clicked to change lang:
changelang(lang:string):void{  
  // 1. have vew lang and 
  // 2.used it   
  this._TranslateService.use(lang);
// 3.change direction
  this.changeDirection(lang);
    //  }
    }

changeDirection(lang:string):void{
if(lang=='en'){
  this._Renderer2.setAttribute( document.documentElement,'dir','ltr');
  this._Renderer2.setAttribute( document.documentElement,'lang','en');

  }
  else if(lang=='ar'){
  this._Renderer2.setAttribute( document.documentElement,'dir','rtl');
  this._Renderer2.setAttribute( document.documentElement,'lang','ar');


  
 }
}


}
