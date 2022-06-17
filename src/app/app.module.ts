import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { AuthGuard } from '@app/core/guards/auth-guard.service'
import { ScreenAccessPermissionGuard as ScreenGuard } from '@app/core/guards/screen-access-permission-guard.service';
import { AuthService } from '@app/core/services/auth.service'
import { AuthInterceptorService } from '@app/core/interceptor/auth-interceptor.service'
import { LocalStorageTokenUtils } from '@app/core/utils/local-storege-token.utils';

import { AngularMaterialModule } from '@theme/angular-material.module'
import { AppComponent } from '@app/app.component'
import { AppRoute } from '@app/app.route'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    AppRoute,
    EffectsModule.forRoot([]),
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [
    AuthGuard, 
    ScreenGuard, 
    AuthService,
    LocalStorageTokenUtils,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
