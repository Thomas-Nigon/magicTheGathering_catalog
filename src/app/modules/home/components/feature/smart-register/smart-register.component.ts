import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../../../shared/validators/passwordValidator';
import { matchPasswordValidator } from '../../../shared/validators/matchPasswordValidator';

@Component({
  selector: 'app-smart-register',
  templateUrl: './smart-register.component.html',
  styleUrl: './smart-register.component.scss',
})
export class SmartRegisterComponent {
  constructor(private fb: FormBuilder) {}

  public registerForm = this.fb.group({
    username: [
      '',
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ],
    credentials: this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, passwordValidator()]],
      confirmPassword: ['', [Validators.required, matchPasswordValidator()]],
    }),
  });
  onSubmitRegisterForm(): void {
    console.log('form submitted ! data sent:', this.registerForm.value);
  }
}
