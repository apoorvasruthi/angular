import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable()
export class CommonService {

  constructor(public formBuilder: FormBuilder) { }

  contactForm(){
    return this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]),      
    ],
    zipcode: ['', Validators.required],
    state: ['', Validators.required]
    });
  }

}
