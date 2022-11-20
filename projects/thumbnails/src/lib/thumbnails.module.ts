import { NgModule } from '@angular/core';
import { ThumbnailsComponent } from './thumbnails.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ThumbnailsComponent],
  imports: [MatCardModule],
  exports: [ThumbnailsComponent],
})
export class ThumbnailsModule {}
