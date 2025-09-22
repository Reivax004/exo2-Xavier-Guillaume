import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Contactdata {

  public contactData : any;

  setFormData(contactData: any) {
    this.contactData = contactData;
  }
  getFormData() {
    return this.contactData;
  }
}
