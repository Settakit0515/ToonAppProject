import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AllBookPage } from '../pages/all-book/all-book';
import { BookDetialsPage } from '../pages/book-detials/book-detials';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = RegisterPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

