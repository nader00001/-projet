import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quest33',
  templateUrl: './quest33.component.html',
  styleUrls: ['./quest33.component.css'],
})
export class Quest33Component {
  monFormulaire: FormGroup;
  isCorrectAnswer: any;

  constructor(private formBuilder: FormBuilder) {
    this.monFormulaire = this.formBuilder.group({
      reponse1: ['', Validators.required],
      reponse2: ['', Validators.required],
      reponse3: ['', Validators.required],
      reponse4: ['', Validators.required],
      reponse5: ['', Validators.required],
      reponse6: ['', Validators.required]
    });
  }

  onSubmit() {
    // Vérifier si les réponses sont correctes
    if (
      this.monFormulaire.value.reponse1 === 'reponse1' &&
      this.monFormulaire.value.reponse2 == '1' &&
      this.monFormulaire.value.reponse3 == '3' &&
      this.monFormulaire.value.reponse4 == '2' &&
      this.monFormulaire.value.reponse5 == '4' &&
      this.monFormulaire.value.reponse6 == '5'
    ) {

      alert('أحسنت');
      this.isCorrectAnswer = true;
      // Vous pouvez également soumettre le formulaire ici si nécessaire
    } else {
      this.isCorrectAnswer = false;
      console.log(this.monFormulaire.value.reponse1)
      alert('لم توفق');
    }
  }
}
