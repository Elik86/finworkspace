import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Response } from '../../../models/backend';

@Injectable({
  providedIn: 'root',
})

/**
 * @class PostBackEndService
 * @description This service acts as a service for ThirdPary interactions
 *              To separate layers of data retreval from data manipulation services
 */
export class PostBackEndService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Response<Post[]>> {
    return this.http.get<Response<Post[]>>(`/api/posts`);
  }
}
