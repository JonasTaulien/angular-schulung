import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidator {

  public static validator(control: AbstractControl) : ValidationErrors | null {
    if(control.value == 'B'){
      return null;
    }else{
      return {"MUST_BE_B": "Value must be 'B'"}
    }
  }
}
