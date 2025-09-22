import { Injectable } from '@angular/core';
import {Formulaireinterface} from '../models/formulaireinterface';

@Injectable({
  providedIn: 'root'
})
export class Contactdata {

  public contactData : Formulaireinterface | null = null;

  setFormData(contactData: Formulaireinterface) {
    this.contactData = contactData;
  }
  getFormData() {
    return this.contactData;
  }
}
