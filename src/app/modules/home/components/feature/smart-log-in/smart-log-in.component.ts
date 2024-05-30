import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-smart-log-in',
  templateUrl: './smart-log-in.component.html',
  styleUrl: './smart-log-in.component.scss',
})
export class SmartLogInComponent {
  constructor(private fb: FormBuilder) {}

  public userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
  });
  onSubmit(): void {
    console.info(this.userForm.value.credentials);
    console.info('to the backend');
  }
}
