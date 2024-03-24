import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceuil3',
  templateUrl: './aceuil3.component.html',
  styleUrls: ['./aceuil3.component.css'],
})
export class Aceuil3Component {
  constructor(private router: Router) {}
  redirectToOtherRouterFaracha() {
    this.router.navigate(['kessa1']);
  }
  redirectToOtherRouterHasoub() {
    this.router.navigate(['kessa4']);
  }
  redirectToOtherRouterSemee() {
    this.router.navigate(['kessa3']);
  }
  redirectToOtherRouterRabie() {
    this.router.navigate(['kessa2']);
  }
}
