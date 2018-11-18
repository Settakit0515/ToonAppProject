import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookDetialsPage } from './book-detials';

@NgModule({
  declarations: [
    BookDetialsPage,
  ],
  imports: [
    IonicPageModule.forChild(BookDetialsPage),
  ],
})
export class BookDetialsPageModule {}
