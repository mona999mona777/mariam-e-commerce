import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import { loadingscreenInterceptor } from './core/interceptors/loadingscreen.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


// func used to load files of translate from file of translate you selected:
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
  }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:'top'})),
     provideClientHydration(),provideHttpClient(withFetch(),withInterceptors([headerInterceptor,errorsInterceptor,loadingscreenInterceptor])),
     provideAnimations(),provideToastr(),importProvidersFrom(NgxSpinnerModule , TranslateModule.forRoot({
      // defaultLanguage:'ar',
     loader:{
      provide:TranslateLoader,
      useFactory:HttpLoaderFactory,
      deps:[HttpClient]
     }
     }))
    ]
};
// withViewTransitions()

