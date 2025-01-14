import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MytranslateService{
  
  private readonly _TranslateService=inject(TranslateService);
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  // private readonly _Renderer2=inject(Renderer2);====>error==> ( او اي حاجه تاني ينفع component جوا ) Service ليه عشان انت متقدرش تستخدمها جوا
  private readonly _Renderer2=inject(RendererFactory2).createRenderer(null,null);//i creat render2 for mu self 


// ده يشتغلوا علل طول  classمن الinstanceعشان اول لما اخد 
    constructor() {
      if (isPlatformBrowser(this._PLATFORM_ID)) {
              // 1.set defult lang ====>اول لما دخل لسه 
              this._TranslateService.setDefaultLang('en');
              //2. (defultمتخزنه من قبل كدا؟(لو في هيستخدم ===> مفيش اهوا عنده)  localstorage هيدخل يشوف في حاجه في ال
             this.useChoiceLang();
      }
     }
  // useChoiceLang befor nont clicked now===> متخزنة ودخلت تاني دلوفتي اهو localstorage يعني انت استخدمت الموقع قبل كدا وسبت اللغة في 
     useChoiceLang():void{
          // 2.get lang from localstorage
       let savedLang=localStorage.getItem('lang');
            // 3.use lang
            if (savedLang!==null) {
              this._TranslateService.use(savedLang!)
            }
              // 4.chang direction
            if (savedLang=='en') {
              //dom of js  يعني كانك رجت لل(direct)علي طول domمش الافضل نتعامل مع ال
            //  document.documentElement==html
              this._Renderer2.setAttribute(document.documentElement,'dir','ltr')
                              //  document.documentElement.dir='ltr'
              this._Renderer2.setAttribute(document.documentElement,'lang','en')
            }
            else if (savedLang=='ar') {
              this._Renderer2.setAttribute(document.documentElement,'dir','rtl')
              this._Renderer2.setAttribute(document.documentElement,'lang','ar')
            }
     }
  // clicked (En -Ar)
     changeLang(lang:string):void{
      if (isPlatformBrowser(this._PLATFORM_ID)) {
        localStorage.setItem('lang',lang);
        // get form localstorage(lan)===>use it ==>change direction
       this.useChoiceLang();
      }
      }
}
