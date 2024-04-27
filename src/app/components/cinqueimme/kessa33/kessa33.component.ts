import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa33',
  templateUrl: './kessa33.component.html',
  styleUrls: ['./kessa33.component.css']
})
export class Kessa33Component {
  audioElement: HTMLAudioElement;
  isPlaying: boolean;

  constructor(private router: Router) {
    this.audioElement = new Audio('assets/vocal/watanAudio.mp3');
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
routersmee() {
  this.router.navigate(["/quest32"]);
}

}
