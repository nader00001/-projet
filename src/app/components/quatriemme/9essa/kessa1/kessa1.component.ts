import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa1',
  templateUrl: './kessa1.component.html',
  styleUrls: ['./kessa1.component.css'],
})
export class Kessa1Component {
  audioElement: HTMLAudioElement;
  isPlaying: boolean;

  constructor(private router: Router) {
    this.audioElement = new Audio('assets/vocal/palestine.mp3');
    this.isPlaying = false;
  }

  toggleAudio() {
    if (this.isPlaying) {
      this.audioElement.pause();
    } else {
      this.audioElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }
  routerFelastin() {
    this.router.navigate(['/quest42']);
  }
}
