import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';

// Load only the modules that we use from shared folder
import { UiModule } from 'projects/finfront/src/app/shared';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryRoutingModule, UiModule],
})
export class GalleryModule {}
