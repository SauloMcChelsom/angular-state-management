import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularMaterialModule } from '../../theme/angular-material.module';
import { AngularMaterialUIComponent, 
         DialogContentExampleDialog, 
         PizzaPartyComponent, 
         BottomSheetOverviewExampleSheet } from './angular-material-ui.component'
import { AngularMaterialUIRoute } from './angular-material-ui-component.route'

@NgModule({
  imports: [
    CommonModule, 
    AngularMaterialUIRoute, 
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    AngularMaterialUIComponent, 
    DialogContentExampleDialog, 
    PizzaPartyComponent,
    BottomSheetOverviewExampleSheet
  ],
  exports: [
    AngularMaterialUIComponent, 
    DialogContentExampleDialog, 
    PizzaPartyComponent
  ]
})
export class AngularMaterialUIModule {}