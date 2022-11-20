import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';

import { ThumbnailsModule } from 'dist/thumbnails';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryRoutingModule, ThumbnailsModule],
})
export class GalleryModule {}
