import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-smart-log-in',
  templateUrl: './smart-log-in.component.html',
  styleUrl: './smart-log-in.component.scss',
})
export class SmartLogInComponent {
  /*   public newUser: User | undefined; */

  constructor(private fb: FormBuilder) {}

  public userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
  });
  onSubmit(): void {
    console.log(this.userForm.value.credentials);
    console.log('to the backend');
  }
}