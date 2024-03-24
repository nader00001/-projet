import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa33',
  templateUrl: './kessa33.component.html',
  styleUrls: ['./kessa33.component.css']
})
export class Kessa33Component {
  constructor(private router : Router){}
routersmee() {
  this.router.navigate(["/quest32"]);
}

}
