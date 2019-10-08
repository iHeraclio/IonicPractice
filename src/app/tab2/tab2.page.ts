import { Component } from '@angular/core';
import {GhibliService} from '../services/ghibli.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  id;
  movie;

  constructor(public _movie: GhibliService, public _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
    this.fillMovie();
  }
  fillMovie() {
    this._movie.getMovie(this.id)
    .then(data => {
      this.movie = data;
    });
  }

}
