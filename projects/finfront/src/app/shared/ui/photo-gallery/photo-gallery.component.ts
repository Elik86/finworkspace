import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from '../../../models/backend';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  @Input() photos: Photo[] | null = [];
  @Output() photoPressed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onPhotoPress(photo: Photo): void {
    this.photoPressed.emit(photo);
  }
}
