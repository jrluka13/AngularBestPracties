import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthModule } from 'src/layouts/auth/auth.module';
import { UserModule } from 'src/layouts/user/user.module';

import { AppComponent } from 'src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from '../layouts/admin/admin.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        UserModule,
        AdminModule,
        BrowserAnimationsModule,
        SharedModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
