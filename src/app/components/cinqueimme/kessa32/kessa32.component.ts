import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kessa32',
  templateUrl: './kessa32.component.html',
  styleUrls: ['./kessa32.component.css'],
})
export class Kessa32Component {
  audioElement: HTMLAudioElement;
  isPlaying: boolean;

  constructor(private router : Router) {
    this.audioElement = new Audio("assets/vocal/rabi3.mp3");
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
  routerRabi3() {
    this.router.navigate(['quest33']);
  }

  playAudio() {
    const audioElement = document.getElementById('audioElement') as HTMLAudioElement;
    audioElement.play();
  }


}
