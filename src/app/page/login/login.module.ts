import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularMaterialModule } from '@theme/angular-material.module'

import { LoginComponent }  from './login.component';
import { LoginRoute }  from './login.route';
import { IndexService }  from './store/index.service'

@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoginRoute
  ], 
  declarations: [
    LoginComponent
  ],
  providers: [ IndexService ]
})
export class LoginModule { }