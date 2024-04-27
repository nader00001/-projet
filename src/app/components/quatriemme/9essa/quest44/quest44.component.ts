import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quest44',
  templateUrl: './quest44.component.html',
  styleUrls: ['./quest44.component.css']
})
export class Quest44Component {
  questionForm1: any;
  questionForm2: any;
  questionForm3: any;
  isCorrectAnswer: any;

  constructor(private formBuilder: FormBuilder) {
    this.questionForm1 = this.formBuilder.group({
      continent: ['', Validators.required]
    });

    this.questionForm2 = this.formBuilder.group({
      explain: ['', Validators.required]
    });

    this.questionForm3 = this.formBuilder.group({
      characters: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.questionForm1.valid && this.questionForm2.valid && this.questionForm3.valid) {
      // Vous pouvez traiter les réponses ici
      this.isCorrectAnswer = true;
      console.log('Form submitted successfully!');
    } else {
      this.isCorrectAnswer = false;
      console.error('Veuillez remplir tous les champs obligatoires.');
    }
  }

}
