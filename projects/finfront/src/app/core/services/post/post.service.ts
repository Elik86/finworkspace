import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Post } from '../../../models/backend';

import { PostBackEndService } from './post-backend.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private postBackEndService: PostBackEndService) {}

  getPosts(): Observable<Post[]> {
    return this.postBackEndService.getPosts().pipe(map((res) => res['data']));
  }

  // getLimitedPosts(): Observable<Post[]> {
  //   return this.postBackEndService.getPosts().pipe(
  //     map((res) => res['data']),
  //     map((x) => x.slice(0, 10))
  //   );
  // }
}
