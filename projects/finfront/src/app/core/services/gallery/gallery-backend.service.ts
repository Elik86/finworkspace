import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Photo, Response } from 'projects/finfront/src/app/models/backend';

@Injectable({
  providedIn: 'root',
})
export class GalleryBackEndService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Response<Photo[]>> {
    return this.http.get<Response<Photo[]>>(`/api/gallery`);
  }
  getAlbum(): Observable<Response<Photo[]>> {
    return this.http.get<Response<Photo[]>>(`/api/album/1`);
  }
}
