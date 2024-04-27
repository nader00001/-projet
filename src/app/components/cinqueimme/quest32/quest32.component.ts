import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quest32',
  templateUrl: './quest32.component.html',
  styleUrls: ['./quest32.component.css']
})
export class Quest32Component {

  questionForm: any;
  isCorrectAnswer: any;

  constructor(private formBuilder: FormBuilder) {
    this.questionForm = this.formBuilder.group({
      sourceSound: ['', Validators.required],
      source: ['', Validators.required],
      items1: [''],
      items2: [''],
      items3: [''],
      items4: [''],
      items5: [''],
      items6: [''],
      items7: [''],
      items8: [''],
      cities1: [''],
      cities2: [''],
      cities3: [''],
      cities4: [''],
      cities5: [''],
      cities6: [''],
      opinion: ['']
    });
  }

  Submit() {
    if (this.questionForm.valid) {
      console.log('Formulaire valide. Valeurs :', this.questionForm.value);
      this.isCorrectAnswer = true;
      // Ajoutez ici le code pour soumettre les données à votre backend ou effectuer d'autres opérations.
    } else {
      this.isCorrectAnswer = false;
      console.error('Formulaire invalide. Veuillez remplir tous les champs requis.');
    }
  }
}
