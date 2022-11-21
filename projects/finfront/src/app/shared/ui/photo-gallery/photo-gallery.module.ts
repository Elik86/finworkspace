import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from './photo-gallery.component';

import { ThumbnailsModule } from 'dist/thumbnails';

@NgModule({
  declarations: [PhotoGalleryComponent],
  imports: [CommonModule, ThumbnailsModule],
  exports: [PhotoGalleryComponent],
})
export class PhotoGalleryModule {}
