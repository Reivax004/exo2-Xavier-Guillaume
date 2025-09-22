import { Component } from '@angular/core';
import {Film, FILMS} from '../film';


@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  public listFors: Film[] = FILMS;

  selectedFilm: any = null;

  selectFilm(film: any) {
    this.selectedFilm = film;
  }



}

