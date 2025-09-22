import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Contactdataservice} from '../service/contactdataservice';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  public isChecked : boolean = false;

  public contactForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    age: new FormControl(''),
    comment: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public clickToHide(event: Event) {
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
  public constructor(private contactDataService: Contactdataservice) {}

  public onSubmit(): void {
    alert("Formulaire valide");
    this.contactDataService.setFormData(this.contactForm.value);
  }
}
