import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa34',
  templateUrl: './kessa34.component.html',
  styleUrls: ['./kessa34.component.css']
})
export class Kessa34Component {
  audioElement: HTMLAudioElement;
  isPlaying: boolean;

  constructor(private router: Router) {
    this.audioElement = new Audio('assets/vocal/hasoubAudio.mp3');
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
routerhasoub() {
  this.router.navigate(['/quest34']);
}

}
