import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibPostComponent } from './lib-post.component';
import { LibIconComponent } from './svg-icon/lib-icon.component';

@NgModule({
  declarations: [LibPostComponent, LibIconComponent],
  imports: [
    CommonModule,
  ],
  exports: [LibPostComponent],
})
export class LibPostModule {
}
