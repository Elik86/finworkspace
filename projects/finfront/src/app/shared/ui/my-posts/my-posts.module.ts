import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPostsComponent } from './my-posts.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MyPostsComponent],
  imports: [CommonModule, MatCardModule],
  exports: [MyPostsComponent],
})
export class MyPostsModule {}
