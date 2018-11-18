import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvidersProvider } from '../../providers/data-providers/data-providers';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild("username") username;
  @ViewChild("password") password;
  @ViewChild("name") name;
  /* @ViewChild("gender") gender;
  @ViewChild("age") age;
  @ViewChild("email") email; */

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProviders: DataProvidersProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  submitData() {

    let user: string = this.username.value;
    let pass: string = this.password.value;
    let name: string = this.name.value;
    /* let age: string = this.age.value;
    let gender: string = this.gender.value;
    let email: string = this.email.value; */

    this.dataProviders.insertUserData(user, pass, name).then((data: any) => {
      console.log(data);
      if (data != null) {
        let alert = this.alertCtrl.create({
          title: 'Sussess',
          subTitle: 'Register Suscess',
          buttons: ['OK']
        })
        alert.present();
      } else {
        let alert2 = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Username or Password Incorrect',
          buttons: ['OK']
        })
        alert2.present();
      }
    }, error => {
      console.error('Error', error)
    });

  }

  goLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
