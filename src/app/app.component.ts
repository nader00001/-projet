import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ToAceuil4() {
    this.router.navigate(['/aceuil4']);
  }

  ToAceuil3() {
    this.router.navigate(['/aceuil3']);
  }

  showVideoBackground: boolean = false;
  constructor(private router: Router) {}
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
