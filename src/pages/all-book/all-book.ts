import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvidersProvider } from '../../providers/data-providers/data-providers';
import { BookDetialsPage } from '../book-detials/book-detials';

/**
 * Generated class for the AllBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-book',
  templateUrl: 'all-book.html',
})
export class AllBookPage {

  //@ViewChild("item.f_name") idData;
  //@ViewChild("item.l_name") idData1;

  datalist: any;
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProviders: DataProvidersProvider,
    public alertCtrl: AlertController) {

    this.setItems();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllBookPage');
  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.data = this.datalist;
  }

  filterItems(ev: any) {
    //this.getData();
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.data = this.data.filter(function (item) {
        return item.Name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  //----------------------------------//
  ionViewWillEnter() {
    this.getData();
  }

  //--------------------------------//
  onClick() {
    this.navCtrl.pop();
  }

  gotoDetail(data) {
    this.navCtrl.push(BookDetialsPage, {
      id: data
    })
    /* this.dataProviders.gotoDetailBook(data).then((data: any) => {     //this.dataLists = data.rows;
      console.log('Post Susses') */
    //alert(JSON.stringify(data));
    //console.log(data);
    //this.dataLists = data.rows;
    //this.dataLists = JSON.stringify(data);
    /* }, error => {
      console.error('Error', error)
    }); */
    //this.navCtrl.push(BookDetialsPage);
    /* let alert = this.alertCtrl.create({
      title: data,
      subTitle: "Detail",
      buttons: ['OK']
    });
    alert.present(); */
  }

  //---------------------------------------------------------//
  getData() {
    this.dataProviders.getDataProvider().then((data: any) => {
      //this.dataLists = data.rows;
      console.log(data)
      //this.dataLists = data.rows;
      this.datalist = data;
      this.data = this.datalist;
      //this.data = data;
      //this.dataLists = JSON.stringify(data);
    }, error => {
      console.error('Error', error)
    });
  }


}
