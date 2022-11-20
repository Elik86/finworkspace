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
  photos$!: Observable<Photo[]>;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.photos$ = this.galleryService.getPhotos();
  }

  onThumbClick(albumId: number, e: Event) {
    console.log(e.target);
    alert('clicked me! ' + albumId);
  }
}
