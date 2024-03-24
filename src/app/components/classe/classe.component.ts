import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css'],
})
export class ClasseComponent {
  @Input() nomClasse: string | undefined;
  
}
