import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../models/user.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dumb-sign-in',
  templateUrl: './dumb-sign-in.component.html',
  styleUrl: './dumb-sign-in.component.scss',
})
export class DumbSignInComponent {
  @Input() signinForm!: FormGroup;

  @Output() submitSigninForm = new EventEmitter<User>();
  OnGetSubmitForm(): void {
    this.submitSigninForm.emit();
  }
}
