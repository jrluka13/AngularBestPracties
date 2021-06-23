import { Component } from '@angular/core';
import { AuthFormData } from 'src/layouts/auth/models/interfaces';

@Component({
  selector: 'login-form',
  template: '<auth-form [data]="formData"></auth-form>',
})
export class LoginComponent {
  constructor() {
    this.formData = {
      title: 'Sign In',
      oppositeFormName: 'Sign Up',
      oppositeFormLink: '/register',
      submitButtonLink: '/user',
    };
  }

  formData: AuthFormData;
}
