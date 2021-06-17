import { Component } from '@angular/core';
import { AuthFormData } from 'src/layouts/auth/models/interfaces';

@Component({
  selector: 'register-form',
  template: '<auth-form [data]="formData"></auth-form>',
})
export class RegisterComponent {
  constructor() {
    this.formData = {
      title: 'Sign Up',
      oppositeFormName: 'Sign In',
      oppositeFormLink: '/login',
      submitButtonLink: '/user'
    };
  }

  formData: AuthFormData;
}
