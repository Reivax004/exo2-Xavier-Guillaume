import { Component } from '@angular/core';
import {Contactdataservice} from '../service/contactdataservice';
import {Formulaireinterface} from '../models/formulaireinterface';
import {Error404} from '../error404/error404';

@Component({
  selector: 'app-gestion',
  imports: [
    Error404
  ],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion {

  public constructor(private contactDataService: Contactdataservice) {}

  public contactData: Formulaireinterface | null = null;

  public ngOnInit(): void {
    this.contactData = this.contactDataService.getFormData();
  }

}
