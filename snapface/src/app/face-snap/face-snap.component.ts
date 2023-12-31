import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  img!: string;
  snapped!: boolean;
  ohsnap: string = 'Oh, Snap!';
  location?: string;

  toggle() {
    this.snapped = !this.snapped;
    this.onSnap();
  }

  onSnap() {
    if (this.snapped == true) {
      this.faceSnap.snaps++;
      this.ohsnap = 'Oups, Unsnap !';
    } else {
      this.faceSnap.snaps--;
      this.ohsnap = 'Oh, Snap !';
    }
  }
}
