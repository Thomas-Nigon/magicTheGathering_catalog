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

  pwdHidden: boolean = false;
  confirmPwdHidden: boolean = false;

  OnGetSubmitForm(): void {
    this.submitRegisterForm.emit();
  }
  togglePasswordView() {
    this.pwdHidden = !this.pwdHidden;
  }
  toggleConfirPwdView() {
    this.confirmPwdHidden = !this.confirmPwdHidden;
  }
  get pwdImgSrc(): string {
    return this.pwdHidden
      ? '../../../../assets/icons/eyeIcon.svg'
      : '../../../../assets/icons/closedeyeIcon.svg';
  }
  get confirmPwdImgSrc(): string {
    return this.confirmPwdHidden
      ? '../../../../assets/icons/eyeIcon.svg'
      : '../../../../assets/icons/closedeyeIcon.svg';
  }
}
