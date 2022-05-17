import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "./custom-input/CustomValidator";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  Object = Object;

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    teamName: new FormControl('', [Validators.required]),
    birthDate: new FormControl('2022-05-17', [Validators.required]),
    custom: new FormControl('B', [Validators.required, CustomValidator.validator])
  });

  public onSubmit(){
    console.log('Form value:', this.registerForm.value)
  }
}
