import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa2',
  templateUrl: './kessa2.component.html',
  styleUrls: ['./kessa2.component.css']
})
export class Kessa2Component {
  constructor(private router : Router) {}
routerBayteri() {
this.router.navigate(['/quest43']);
}


}
