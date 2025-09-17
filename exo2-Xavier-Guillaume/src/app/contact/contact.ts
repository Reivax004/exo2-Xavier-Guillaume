import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  public isChecked = false;

  public profileForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    //hide: new FormControl(false),
    email: new FormControl('', Validators.email),
    age: new FormControl(''),
    comment: new FormControl(''),
  });
  onToggleHide(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.isChecked = checkbox.checked;
  }


}
