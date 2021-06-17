import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { SvgIconComponent } from 'src/shared/components/svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [HeaderComponent, SvgIconComponent, NotFoundPageComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent, SvgIconComponent, NotFoundPageComponent
  ]
})
export class SharedModule {
}
