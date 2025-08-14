import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.scss'
})
export class ReactiveformsComponent {
  userForm: FormGroup = new FormGroup({
    // form controls provided
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    fullName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl(+91, [Validators.required, Validators.maxLength(12)]),
    dob: new FormControl(),
    gender: new FormControl("defaultPlaceholder")
  })

  onUserSave() {
    const formData = this.userForm.value;
    
  }

  constructor() {
    this.userForm.controls['gender'].disable()

    //enable after 3 secs
    setTimeout(() => {
      this.userForm.controls['gender'].enable()
    }, 3000)
  }
}
