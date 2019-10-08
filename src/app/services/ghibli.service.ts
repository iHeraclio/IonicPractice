import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GhibliService {

  constructor(public _http: HttpClient) { }

  getMovies() {
    return new Promise((resolve, reject) => {
      this._http.get('https://ghibliapi.herokuapp.com/films').
        subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    } );
  }

  getMovie(movieID){
    return new Promise((resolve, reject) => {
      this._http.get('https://ghibliapi.herokuapp.com/films/'+ movieID).
        subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    } );
  }
}
