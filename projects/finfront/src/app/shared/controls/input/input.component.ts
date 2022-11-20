import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = '';
  @Output() changed = new EventEmitter<string>();

  value: string = '';

  constructor() {}

  ngOnInit(): void {}

  private _onChange: any = () => {};
  private _onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  onKeyup(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this._onChange(this.value);
    this.changed.emit(this.value);
  }

  onBlur(): void {
    this._onTouched();
  }
}
