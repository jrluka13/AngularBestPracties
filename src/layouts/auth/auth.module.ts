import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from 'src/layouts/auth/auth-routing.module';
import { RegisterComponent } from 'src/layouts/auth/pages/register/register.component';
import { AuthLayoutComponent } from 'src/layouts/auth/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthFormComponent } from 'src/layouts/auth/components/auth-form/auth-form.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthLayoutComponent, AuthFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
})
export class AuthModule { }
