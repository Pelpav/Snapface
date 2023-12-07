import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  img!: string;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami';
    this.createDate = new Date();
    this.snaps = 7;
    this.img =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  onAddSnap() {
    ++this.snaps;
  }
}
