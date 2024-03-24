import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa1',
  templateUrl: './kessa1.component.html',
  styleUrls: ['./kessa1.component.css']
})
export class Kessa1Component {
  constructor(private router : Router) {}
routerFelastin() {
  this.router.navigate(["/quest42"]);
}


}
