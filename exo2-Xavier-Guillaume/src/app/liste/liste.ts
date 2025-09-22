import { Component } from '@angular/core';
import {Film, FILMS} from '../models/film';


@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  public listFors: Film[] = FILMS;

  public selectedFilm: Film = {id: 0, name: '', affiche: ''};

  public selectFilm(film: Film) {
    this.selectedFilm = film;
  }
}

