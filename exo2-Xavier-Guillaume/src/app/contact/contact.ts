import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {Contactdata} from '../contactdata';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    FormsModule,
    RouterLink
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  public isChecked = false;

  public contactForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    age: new FormControl(''),
    comment: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onToggleHide(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.isChecked = checkbox.checked;

    const emailControl = this.contactForm.get('email');

    if (this.isChecked) {
      emailControl?.reset();
      emailControl?.clearValidators();
      emailControl?.updateValueAndValidity();
    } else {
      emailControl?.setValidators([Validators.required, Validators.email]);
      emailControl?.updateValueAndValidity();
    }
  }
  constructor(private contactDataService: Contactdata, private router: Router) {}

  onSubmit(): void {
    alert("Formulaire valide");
    this.contactDataService.setFormData(this.contactForm.value);
  }

}
