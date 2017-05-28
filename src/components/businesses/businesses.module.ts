import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessesComponent } from './businesses';

@NgModule({
  declarations: [
    BusinessesComponent,
  ],
  imports: [
    IonicPageModule.forChild(BusinessesComponent),
  ],
  exports: [
    BusinessesComponent
  ]
})
export class BusinessesComponentModule {}
