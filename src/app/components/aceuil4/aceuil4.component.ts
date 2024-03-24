import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceuil4',
  templateUrl: './aceuil4.component.html',
  styleUrls: ['./aceuil4.component.css']
})
export class Aceuil4Component {
  constructor(private router: Router) {}
  redirectToOtherRouterFaracha() {
    this.router.navigate(['kes1']);
  }
  redirectToOtherRouterHasoub() {
    this.router.navigate(['kes2']);
  }
  redirectToOtherRouterSemee() {
    this.router.navigate(['kes3']);
  }
  redirectToOtherRouterRabie() {
    this.router.navigate(['kes4']);
  }
}
