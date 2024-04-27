import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa4',
  templateUrl: './kessa4.component.html',
  styleUrls: ['./kessa4.component.css']
})
export class Kessa4Component {
  audioElement: HTMLAudioElement;
  isPlaying: boolean;
  constructor(private router : Router){
    this.audioElement = new Audio('assets/vocal/mawkliAudio.mp3');
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
router2() {
  this.router.navigate(['./quest44']);
}


}
