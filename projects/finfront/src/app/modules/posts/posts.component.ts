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
  posts$!: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getPosts();
  }

  ngOnInit(): void {}
}
