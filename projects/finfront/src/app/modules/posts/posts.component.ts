import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../core/services/post/post.service';
import { Post } from '../../models/backend';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  // posts$!: Observable<Post[]>;

  posts!: Post[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe((res) => (this.posts = res));
  }

  ngOnInit(): void {}
}
