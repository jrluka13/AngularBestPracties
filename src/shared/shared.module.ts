import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { SvgIconComponent } from 'src/shared/components/svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, SvgIconComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, SvgIconComponent
  ]
})
export class SharedModule {
}
