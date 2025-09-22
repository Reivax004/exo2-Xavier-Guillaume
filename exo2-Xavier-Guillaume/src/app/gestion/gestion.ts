import { Component } from '@angular/core';
import {Contactdata} from '../service/contactdata';
import {Formulaireinterface} from '../modele/formulaireinterface';
import {Footer} from '../footer/footer';
import {Error404} from '../error404/error404';

@Component({
  selector: 'app-gestion',
  imports: [
    Footer,
    Error404
  ],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion {

  constructor(private contactDataService: Contactdata) {}

  contactData: Formulaireinterface | null = null;

  ngOnInit(): void {
    this.contactData = this.contactDataService.getFormData();
  }


}
