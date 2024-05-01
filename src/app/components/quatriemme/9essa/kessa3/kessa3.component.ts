import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa3',
  templateUrl: './kessa3.component.html',
  styleUrls: ['./kessa3.component.css'],
})
export class Kessa3Component {
  audioElement: HTMLAudioElement;
  isPlaying: boolean;
  constructor(private router: Router) {
    this.audioElement = new Audio('assets/vocal/saberAudioUpdate.mp3');
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
  routerSaber() {
    this.router.navigate(['/quest41']);
  }
}
