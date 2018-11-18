import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllBookPage } from './all-book';

@NgModule({
  declarations: [
    AllBookPage,
  ],
  imports: [
    IonicPageModule.forChild(AllBookPage),
  ],
})
export class AllBookPageModule {}
