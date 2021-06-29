import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { SvgIconComponent } from 'src/shared/components/svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from 'src/shared/components/not-found-page/not-found-page.component';
import { SharedRoutingModule } from 'src/shared/shared-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/shared/components/mat-dialog/mat-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './classes/guards/auth-guard';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './classes/token-interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    SvgIconComponent,
    NotFoundPageComponent,
    MatDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent, SvgIconComponent, NotFoundPageComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
  ],
})
export class SharedModule {
}
