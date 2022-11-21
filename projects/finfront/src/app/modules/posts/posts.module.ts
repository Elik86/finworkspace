import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

import { UiModule } from 'projects/finfront/src/app/shared';

// Load only the modules that we use from shared folder
@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostsRoutingModule, UiModule],
})
export class PostsModule {}
