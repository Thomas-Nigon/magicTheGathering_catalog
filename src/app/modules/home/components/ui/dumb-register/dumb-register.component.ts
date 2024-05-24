import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../models/user.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dumb-register',
  templateUrl: './dumb-register.component.html',
  styleUrl: './dumb-register.component.scss',
})
export class DumbRegisterComponent {
  @Input() registerForm!: FormGroup;

  @Output() submitRegisterForm = new EventEmitter<User>();
  OnGetSubmitForm(): void {
    this.submitRegisterForm.emit();
  }
}
