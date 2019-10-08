import { Component } from '@angular/core';
import {GhibliService} from '../services/ghibli.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  movies;
  response;
  constructor(public _movies: GhibliService) {
    this.fillMovies();
  }

  fillMovies(){
    this._movies.getMovies()
    .then(data => {
      this.movies = data;
    });
  }

}
