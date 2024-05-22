import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dumb-log-in',
  templateUrl: './dumb-log-in.component.html',
  styleUrl: './dumb-log-in.component.scss',
})
export class DumbLogInComponent {
  @Input() loginForm!: FormGroup;

  @Output() submit = new EventEmitter<User>();
  isFocused: boolean = false;
  onGetSubmit(): void {
    this.submit.emit();
  }

  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }
}
