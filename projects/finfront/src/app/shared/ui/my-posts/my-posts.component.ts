import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/backend';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss'],
})
export class MyPostsComponent implements OnInit {
  @Input() posts: Post[] | null = [];
  constructor() {}

  ngOnInit(): void {}
}
