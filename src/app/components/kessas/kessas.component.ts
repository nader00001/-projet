import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kessas',
  templateUrl: './kessas.component.html',
  styleUrls: ['./kessas.component.css'],
})
export class KessasComponent {
  @Input() imageUrl: string | undefined;
}
