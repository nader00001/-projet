import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  audioElement: HTMLAudioElement;
  isPlaying: boolean;

  ToAceuil4() {
    this.router.navigate(['/aceuil4']);
  }

  ToAceuil3() {
    this.router.navigate(['/aceuil3']);
  }


  toggleAudio() {
    if (this.isPlaying) {
      this.audioElement.pause();
    } else {
      this.audioElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }
  showVideoBackground: boolean = false;
  constructor(private router: Router) {
    this.audioElement = new Audio('assets/vocal/Audio page de garde.mp3');
    this.isPlaying = false;
  }
  title = 'pfeIslemOns';

  Aceuil4() {
    this.router.navigate(['/kes1']);
    console.log('first');
  }
  Aceuil5() {
    this.router.navigate(['Aceuil']);
  }

  isBackground() {
    return this.router.url === '/';
  }
}
