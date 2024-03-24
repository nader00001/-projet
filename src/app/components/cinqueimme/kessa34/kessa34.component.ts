import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa34',
  templateUrl: './kessa34.component.html',
  styleUrls: ['./kessa34.component.css']
})
export class Kessa34Component {
  constructor(private router : Router){}
routerhasoub() {
  this.router.navigate(['/quest34']);
}

}
