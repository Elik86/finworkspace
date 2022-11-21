import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../../../models/backend';

import { PostBackEndService } from './post-backend.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private postBackEndService: PostBackEndService) {}

  /**
   * @description retrieves all posts
   * @returns {Observable<Post[]>} return posts from a backend service
   */
  getPosts(): Observable<Post[]> {
    return this.postBackEndService.getPosts().pipe(map((res) => res['data']));
  }
  /**
   * @description retrieves all posts, splices the result to first 10
   * @returns {Observable<Photo[]>} return posts from a backend service
   */
  getLimitedPosts(): Observable<Post[]> {
    return this.postBackEndService.getPosts().pipe(
      map((res) => res['data']),
      map((x) => x.slice(0, 10))
    );
  }
}
