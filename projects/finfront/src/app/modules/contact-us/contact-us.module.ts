import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';

// Load only the modules that we use from shared folder
import {
  ButtonsModule,
  ControlsModule,
} from 'projects/finfront/src/app/shared';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    ButtonsModule,
    ControlsModule,
  ],
})
export class ContactUsModule {}
