import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GalleryService } from '../../core/services/gallery/gallery.service';
import { PostService } from '../../core/services/post/post.service';
import { Photo, Post } from '../../models/backend';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts$!: Observable<Post[]>;
  photos$!: Observable<Photo[]>;

  constructor(
    private galleryService: GalleryService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    // this.posts$ = this.postService.limitedPosts;

    // const allPosts$ = this.postService.getPosts();
    // const allPhotos$ = this.galleryService.getPhotos();

    this.posts$ = this.postService.getPosts().pipe(map((x) => x.slice(0, 10)));
    this.photos$ = this.galleryService
      .getPhotos()
      .pipe(map((x) => x.slice(0, 10)));
  }
}
