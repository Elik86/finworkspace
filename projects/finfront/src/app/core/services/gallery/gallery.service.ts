import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Photo } from '../../../models/backend';

import { GalleryBackEndService } from './gallery-backend.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private galleryBackEndService: GalleryBackEndService) {}

  getPhotos(): Observable<Photo[]> {
    return this.galleryBackEndService
      .getPhotos()
      .pipe(map((res) => res['data']));
  }

  getLimitedPhotos(): Observable<Photo[]> {
    return this.galleryBackEndService.getPhotos().pipe(
      map((res) => res['data']),
      map((x) => x.slice(0, 10))
    );
  }

  getAlbum(albumId: number): Observable<Photo[]> {
    return this.galleryBackEndService
      .getAlbum()
      .pipe(map((res) => res['data']));
  }
}
