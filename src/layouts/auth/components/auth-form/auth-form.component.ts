import {
  ChangeDetectionStrategy,
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFormData } from 'src/layouts/auth/models/interfaces';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent implements OnInit, OnDestroy {
  private _data: AuthFormData;

  sub: Subscription;

  form: FormGroup;

  hide = true;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  @Input()
  set data(value: AuthFormData) {
    this._data = value;
  }

  get data(): AuthFormData {
    return this._data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async onSubmit(): Promise<void> {
    this.form.disable();
    this.sub = this.auth.login(this.form.value).subscribe(
      () => {
        this.router.navigateByUrl(this.data.submitButtonLink);
      },
      () => {
        this.form.enable();
      },
    );
  }

  getErrorMessage(controlName: string): string {
    if (this.form.get(controlName).hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get(controlName).hasError(controlName) ? `Not a valid ${controlName}` : '';
  }
}
