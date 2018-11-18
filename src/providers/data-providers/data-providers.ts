import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers, } from '@angular/http';

/*
  Generated class for the DataProvidersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataProvidersProvider {

  url: string = 'http://localhost/apiToonApp/';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvidersProvider Provider');
  }

  // All Book Search
  getDataProvider() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'ShowData.php').subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  // Detail Number of Book
  postDetailBook(data: any) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let body = JSON.stringify({ data: data });
      this.http.post(this.url + 'BookDetail.php', body, httpOptions).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  // Detail Book
  postDetailBookData(data: any) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let body = JSON.stringify({ data: data });
      this.http.post(this.url + 'BookData.php', body, httpOptions).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  // Faver User Data
  postFaverBookUser(data: any) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let body = JSON.stringify({ data: data });
      this.http.post(this.url + 'FavData.php', body, httpOptions).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  loginData(username: any, password: any) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let body = JSON.stringify({ username: username, password: password });
      this.http.post(this.url + 'Login.php', body, httpOptions).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  insertUserData(username: any, password: any, name: any) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let body = JSON.stringify({ username: username, password: password, name: name });
      this.http.post(this.url + 'InsertData.php', body, httpOptions).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

}
