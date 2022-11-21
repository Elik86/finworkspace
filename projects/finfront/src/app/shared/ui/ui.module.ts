import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPostsModule } from './my-posts/my-posts.module';
import { PhotoGalleryModule } from './photo-gallery/photo-gallery.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MyPostsModule, PhotoGalleryModule],
  exports: [MyPostsModule, PhotoGalleryModule, MyPostsModule],
})
export class UiModule {}
