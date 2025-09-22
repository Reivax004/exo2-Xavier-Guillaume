import { Injectable } from '@angular/core';
import {Formulaireinterface} from '../models/formulaireinterface';

@Injectable({
  providedIn: 'root'
})
export class Contactdataservice {

  public contactData : Formulaireinterface | null = null;

  public setFormData(contactData: Formulaireinterface) {
    this.contactData = contactData;
  }
  public getFormData() {
    return this.contactData;
  }
}
