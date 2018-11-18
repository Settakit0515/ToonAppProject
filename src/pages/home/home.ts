import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AllBookPage } from '../all-book/all-book';
import { BookDetialsPage } from '../book-detials/book-detials';
import { NoficationPage } from '../nofication/nofication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goAllBook(){
    this.navCtrl.push(AllBookPage);
  }

  gotopage(){
    this.navCtrl.push(BookDetialsPage);
  }
  gotoNofication(){
    this.navCtrl.push(NoficationPage);
  }
}
