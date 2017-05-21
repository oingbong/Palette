import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickupComponent } from './pickup';

@NgModule({
  declarations: [
    PickupComponent,
  ],
  imports: [
    IonicPageModule.forChild(PickupComponent),
  ],
  exports: [
    PickupComponent
  ]
})

export class PickupModule {}
