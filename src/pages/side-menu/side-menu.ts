import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavoritePage } from '../favorite/favorite';
import { AllBookPage } from '../all-book/all-book';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SideMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {

  user: any;

  @ViewChild(Nav) nav: Nav;
  page: Array<{ title: string, component: any }>;
  rootPage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.page = [
      { title: 'Favorite', component: FavoritePage },
      { title: 'All Book', component: AllBookPage },
      { title: 'Logout', component: LoginPage }
    ]

    this.user = this.navParams.get('user');

  }

  openPage(page) {
    this.nav.push(page.component, {
      user: this.user
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
  }

}
