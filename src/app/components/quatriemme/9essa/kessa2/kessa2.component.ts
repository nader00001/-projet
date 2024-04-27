import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa2',
  templateUrl: './kessa2.component.html',
  styleUrls: ['./kessa2.component.css']
})
export class Kessa2Component {
  audioElement: HTMLAudioElement;
  isPlaying: boolean;
  constructor(private router : Router){
    this.audioElement = new Audio('assets/vocal/bayteriAudio.mp3');
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
routerBayteri() {
this.router.navigate(['/quest43']);
}


}
