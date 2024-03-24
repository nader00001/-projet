import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kessa32',
  templateUrl: './kessa32.component.html',
  styleUrls: ['./kessa32.component.css'],
})
export class Kessa32Component {
  constructor(
    private router: Router,

  ) {}
  routerRabi3() {
    this.router.navigate(['quest33']);
  }


}
