import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { SidebarComponent } from './layouts/components/sidebar/sidebar.component';
import { NavlinksComponent } from './layouts/components/navlinks/navlinks.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavlinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
