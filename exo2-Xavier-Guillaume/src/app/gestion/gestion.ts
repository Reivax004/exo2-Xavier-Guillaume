import { Component } from '@angular/core';
import {Contactdata} from '../contactdata';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion {

  constructor(private contactDataService: Contactdata) {}

  contactData: any;

  ngOnInit(): void {
    this.contactData = this.contactDataService.getFormData();
  }


}
