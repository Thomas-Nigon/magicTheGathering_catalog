import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-smart-sign-in',
  templateUrl: './smart-sign-in.component.html',
  styleUrl: './smart-sign-in.component.scss',
})
export class SmartSignInComponent {
  constructor(private fb: FormBuilder) {}

  public signinForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
      confirmPassword: [''],
    }),
  });
  onSubmitSigninForm(): void {
    console.log('form submitted ! data sent:', this.signinForm.value);
  }
}
