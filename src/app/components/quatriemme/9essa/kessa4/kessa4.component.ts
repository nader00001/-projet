import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kessa4',
  templateUrl: './kessa4.component.html',
  styleUrls: ['./kessa4.component.css']
})
export class Kessa4Component {
 constructor(private router : Router){}
router2() {
  this.router.navigate(['./quest44']);
}


}
