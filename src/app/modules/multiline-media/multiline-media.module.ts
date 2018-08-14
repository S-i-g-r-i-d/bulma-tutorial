import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultilineMediaComponent} from './multiline-media/multiline-media.component';
import {MultilineMediasComponent } from './multiline-medias/multiline-medias.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultilineMediaComponent, MultilineMediasComponent],
  exports: [MultilineMediaComponent, MultilineMediasComponent]
})
export class MultilineMediaModule { }
