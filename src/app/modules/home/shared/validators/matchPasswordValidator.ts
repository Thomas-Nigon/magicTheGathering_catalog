import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password1 = control.parent?.get('password')?.value;
    const password2 = control.parent?.get('confirmPassword')?.value;
    return password1 === password2 ? null : { mismatchPassword: true };
  };
}
