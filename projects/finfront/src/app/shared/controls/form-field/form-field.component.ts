import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input() label!: string;
  @Input() control!: AbstractControl;
  @Input() patternError!: string;
  constructor() {}

  ngOnInit(): void {}

  get errorKey() {
    return (
      this.control && this.control.errors && Object.keys(this.control.errors)[0]
    );
  }

  hasError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }
}
