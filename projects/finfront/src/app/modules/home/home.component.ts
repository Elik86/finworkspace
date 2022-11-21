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
  // posts$!: Observable<Post[]>;
  // photos$!: Observable<Photo[]>;

  posts!: Post[];
  photos!: Photo[];

  constructor(
    private galleryService: GalleryService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.galleryService.getLimitedPhotos().subscribe((res) => {
      this.photos = res;
    });

    this.postService.getLimitedPosts().subscribe((res) => {
      this.posts = res;
    });
  }
}
