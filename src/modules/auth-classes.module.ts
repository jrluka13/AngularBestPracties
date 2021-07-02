import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from 'src/modules/classes/guards/auth-guard';
import { TokenInterceptor } from 'src/modules/classes/token-interceptor';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
  ],
})
export class authClassesModule {
}
