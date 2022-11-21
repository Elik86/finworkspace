import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Photo, Response } from 'projects/finfront/src/app/models/backend';

@Injectable({
  providedIn: 'root',
})

/**
 * @class GalleryBackEndService
 * @description This service acts as a service for ThirdPary interactions
 *              To separate layers of data retreval from data manipulation services
 */
export class GalleryBackEndService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Response<Photo[]>> {
    return this.http.get<Response<Photo[]>>(`/api/gallery`);
  }
  getAlbum(albumId: number): Observable<Response<Photo[]>> {
    return this.http.get<Response<Photo[]>>(`/api/album/${albumId.toString()}`);
  }
}
