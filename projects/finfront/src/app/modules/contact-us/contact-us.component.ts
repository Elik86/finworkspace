import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  markFormGroupTouched,
  regex,
  regexErrors,
} from 'projects/finfront/src/app/shared/utils';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  form!: FormGroup;
  regexErrors = regexErrors;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fullname: [
        ,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
      email: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.pattern(regex.email)],
        },
      ],
      phone_number: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.pattern(regex.phone)],
        },
      ],
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      markFormGroupTouched(this.form);
    } else {
      alert('Submit');
    }
  }
}
