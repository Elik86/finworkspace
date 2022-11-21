import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatCardModule } from '@angular/material/card';

// Load only the modules that we use from shared folder
import { UiModule } from 'projects/finfront/src/app/shared';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatCardModule, UiModule],
})
export class HomeModule {}
