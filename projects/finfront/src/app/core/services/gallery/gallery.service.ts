import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Photo } from '../../../models/backend';

import { GalleryBackEndService } from './gallery-backend.service';

@Injectable({
  providedIn: 'root',
})

/**
 * @class GalleryService
 */
export class GalleryService {
  constructor(private galleryBackEndService: GalleryBackEndService) {}

  /**
   * @description retrieves all photos
   * @returns {Observable<Photo[]>} return photos from a backend service
   */
  getPhotos(): Observable<Photo[]> {
    return this.galleryBackEndService
      .getPhotos()
      .pipe(map((res) => res['data']));
  }
  /**
   * @description retrieves all photos, splices the result to first 10
   * @returns {Observable<Photo[]>} return photos from a backend service
   */
  getLimitedPhotos(): Observable<Photo[]> {
    return this.galleryBackEndService.getPhotos().pipe(
      map((res) => res['data']),
      map((x) => x.slice(0, 10))
    );
  }
  /**
   * @description retrieves the album by id
   * @param {number} albumId album id
   * @returns {Observable<Photo[]>} return photos from a backend service
   */
  getAlbum(albumId: number): Observable<Photo[]> {
    return this.galleryBackEndService
      .getAlbum(albumId)
      .pipe(map((res) => res['data']));
  }
}
