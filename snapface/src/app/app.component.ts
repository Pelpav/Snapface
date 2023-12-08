import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  myOtherSnap2!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        createDate: new Date(),
        snaps: 0,
        img: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Ma Chambre',
      },
      {
        title: 'Lucia Bayonneta',
        description: 'La femme de ma vie !',
        createDate: new Date(),
        snaps: 0,
        img: 'https://th.bing.com/th/id/OIP.dJU2x5UU0jfTswO_2j444wAAAA?rs=1&pid=ImgDetMain',
        location: 'Paris',
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        createDate: new Date(),
        snaps: 0,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      },
      {
        title: 'Un bon repas',
        description: "Mmmh que c'est bon !",
        createDate: new Date(),
        snaps: 0,
        img: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      },
    ];
  }
}
