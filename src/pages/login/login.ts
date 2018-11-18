import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvidersProvider } from '../../providers/data-providers/data-providers';

import { SideMenuPage } from '../side-menu/side-menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  /* username: any;
  password: any; */
  @ViewChild("username") musername;
  @ViewChild("password") mpassword;
  loginData: any;
  empty: string = 'null';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public dataProviders: DataProvidersProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(data) {
    let user: string = this.musername.value;
    let pass: string = this.mpassword.value;

    this.dataProviders.loginData(user, pass).then((data: any) => {     //this.dataLists = data.rows;
      console.log();
      if (data != null) {
        this.navCtrl.setRoot(SideMenuPage, {
          user: user
        });
      } else {
        let alert = this.alertCtrl.create({
          title: 'LOGIN FAIL',
          subTitle: 'Username or Password Incorrect',
          buttons: ['OK']
        })
        alert.present();
      }
      //this.loginData = data;
      //alert(JSON.stringify(data));
      //console.log(data);
      //this.dataLists = data.rows;
      //this.dataLists = JSON.stringify(data);
    }, error => {
      console.error('Error', error)
    });




  }

}
