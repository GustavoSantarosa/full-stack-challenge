import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { importProvidersFrom } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LangInterceptor } from './interceptors/lang.interceptor';
import { CookieService } from 'ngx-cookie-service';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      ToastrModule.forRoot({
        positionClass: 'toast-custom-navbar',
        preventDuplicates: false,
      }),
      NzSelectModule,
      NzDropDownModule,
      NzIconModule,
      NzButtonModule,
      BrowserAnimationsModule,
      MatToolbarModule
    ),
    { provide: NZ_I18N, useValue: pt_BR },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: LangInterceptor, multi: true },
  ],
};
