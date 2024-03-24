import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa31',
  templateUrl: './kessa31.component.html',
  styleUrls: ['./kessa31.component.css']
})
export class Kessa31Component {
  constructor(private router : Router){}
  routerFarcha(){
    this.router.navigate(['/quest31']);
  }
}
