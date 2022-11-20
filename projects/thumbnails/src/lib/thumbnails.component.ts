import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ek-thumbnails',
  template: `<div class="ek-thumbnail">
    <mat-card>
      <img mat-card-image src="{{ img }}" alt="Test" />
    </mat-card>
  </div>`,
  styles: [
    `
      .ek-thumbnail {
        cursor: pointer;
      }
    `,
  ],
})
export class ThumbnailsComponent implements OnInit {
  @Input() img!: string;
  constructor() {}

  ngOnInit(): void {}
}
