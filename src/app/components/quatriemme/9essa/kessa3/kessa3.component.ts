import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa3',
  templateUrl: './kessa3.component.html',
  styleUrls: ['./kessa3.component.css']
})
export class Kessa3Component {
  constructor(private router : Router){}
routerSaber() {
  this.router.navigate(['/quest41'])
}


}
