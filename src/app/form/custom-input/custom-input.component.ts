import {Component, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements ControlValueAccessor {

  public value: 'A' | 'B' = 'A';

  private onChange: (value: 'A' | 'B') => void = (val) => {
  };

  private onTouched: () => void = () => {
  };

  constructor(@Optional() @Self() public controlDir: NgControl) {
    if (controlDir) {
      controlDir.valueAccessor = this;
    }
  }

  public setValue(newValue: 'A' | 'B') {
    this.value = newValue;
    this.onChange(newValue);
    this.onTouched();
  }

  registerOnChange(fn: (value: 'A' | 'B') => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // not implemented
  }

  writeValue(newValue: 'A' | 'B'): void {
    this.value = newValue;
  }
}
