import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AllBookPage } from '../pages/all-book/all-book';
import { BookDetialsPage } from '../pages/book-detials/book-detials';
import { NoficationPage } from '../pages/nofication/nofication';
import { DataProvidersProvider } from '../providers/data-providers/data-providers';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FavoritePage } from '../pages/favorite/favorite';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllBookPage,
    BookDetialsPage,
    NoficationPage,
    LoginPage,
    RegisterPage,
    FavoritePage,
    SideMenuPage,
    EditProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AllBookPage,
    BookDetialsPage,
    NoficationPage,
    LoginPage,
    RegisterPage,
    FavoritePage,
    SideMenuPage,
    EditProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvidersProvider,
  ]
})
export class AppModule { }
