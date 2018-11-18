import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvidersProvider } from '../../providers/data-providers/data-providers';
import { BookDetialsPage } from '../book-detials/book-detials';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  user: any;
  datalist: any;
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProviders: DataProvidersProvider,
    public alertCtrl: AlertController) {

    this.user = this.navParams.get('user');
    this.setItems();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }

  goBack() {
    this.navCtrl.pop();
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

  getData() {
    this.dataProviders.postFaverBookUser(this.user).then((data: any) => {     //this.dataLists = data.rows;
      console.log(data);
      if (data != null) {
        this.datalist = data;
        this.data = this.datalist;
      } else {
        this.data = data;
      }

      //alert(JSON.stringify(data));
      //console.log(data);
      //this.dataLists = data.rows;
      //this.dataLists = JSON.stringify(data);
    }, error => {
      console.error('Error', error)
    });
    /* this.dataProviders.getDataProvider().then((data: any) => {
      //this.dataLists = data.rows;
      console.log(data)
      //this.dataLists = data.rows;
      this.datalist = data;
      this.data = this.datalist;
      //this.data = data;
      //this.dataLists = JSON.stringify(data);
    }, error => {
      console.error('Error', error)
    }); */
  }

  gotoDetail() {
    let alert = this.alertCtrl.create({
      title: 'Fav',
      subTitle: '1',
      buttons: ['OK']
    });
    alert.present();
  }

}
