import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./modules/posts/posts.module').then((m) => m.PostsModule),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('./modules/gallery/gallery.module').then(
            (m) => m.GalleryModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./modules/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
