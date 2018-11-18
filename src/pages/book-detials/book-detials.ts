import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataProvidersProvider } from '../../providers/data-providers/data-providers';

/**
 * Generated class for the BookDetialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-detials',
  templateUrl: 'book-detials.html',
})



export class BookDetialsPage {
  //@ViewChild("mdata") data;
  bookdata: any;
  datalist: any;
  id: any;
  //@ViewChild("i") data;

  list: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public dataProviders: DataProvidersProvider) {

    this.id = this.navParams.get('id');

  }

  ionViewWillEnter() {
    this.postData();
    this.postBookData();
    //this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetialsPage');
  }

  onClick(idata) {
    let alert = this.alertCtrl.create({
      title: idata,
      subTitle: "2",
      buttons: ['OK']
    })
    alert.present();
  }

  goBack() {
    this.navCtrl.pop();
  }



  /* getData() {
    this.dataProviders.getDetailBook().then((data: any) => {
      //this.dataLists = data.rows;
      console.log(data)
      //this.dataLists = data.rows;
      this.datalist = data;
      //this.data = this.datalist;
      //this.data = data;
      //this.dataLists = JSON.stringify(data);
    }, error => {
      console.error('Error', error)
    });
  } */

  postData() {
    this.dataProviders.postDetailBook(this.id).then((data: any) => {     //this.dataLists = data.rows;
      console.log(data);
      this.datalist = data;
      //alert(JSON.stringify(data));
      //console.log(data);
      //this.dataLists = data.rows;
      //this.dataLists = JSON.stringify(data);
    }, error => {
      console.error('Error', error)
    });
  }

  postBookData() {
    this.dataProviders.postDetailBookData(this.id).then((data: any) => {     //this.dataLists = data.rows;
      console.log(data);
      this.bookdata = data;
      //alert(JSON.stringify(data));
      //console.log(data);
      //this.dataLists = data.rows;
      //this.dataLists = JSON.stringify(data);
    }, error => {
      console.error('Error', error)
    });
  }



}
