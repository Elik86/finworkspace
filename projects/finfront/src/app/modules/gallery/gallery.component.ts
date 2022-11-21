import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from '../../core/services/gallery/gallery.service';
import { Photo } from '../../models/backend';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  // photos$!: Observable<Photo[]>;

  photos!: Photo[];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getPhotos().subscribe((res) => (this.photos = res));
  }

  onThumbClick(photo: Photo): void {
    this.galleryService
      .getAlbum(photo.albumId)
      .subscribe((res) => (this.photos = res));
  }
}
