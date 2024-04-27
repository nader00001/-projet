import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa31',
  templateUrl: './kessa31.component.html',
  styleUrls: ['./kessa31.component.css']
})
export class Kessa31Component {
  audioElement: HTMLAudioElement;
  isPlaying: boolean;

  constructor(private router: Router) {
    this.audioElement = new Audio('assets/vocal/farachaAudio.mp3');
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
  routerFarcha(){
    this.router.navigate(['/quest31']);
  }
}
